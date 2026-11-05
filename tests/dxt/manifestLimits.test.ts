import { describe, expect, test } from 'bun:test'
import {
  checkManifestByteSize, checkManifestStructure, checkManifestTextSize,
  MAX_MANIFEST_BYTES, MAX_MANIFEST_COLLECTION_ITEMS, MAX_MANIFEST_DEPTH,
} from '../../src/utils/dxt/manifestLimits.js'

describe('untrusted manifest limits', () => {
  test('accepts ordinary manifest data without modifying it', () => {
    const manifest = { manifest_version: '0.3', name: 'fixture', version: '1.0.0', author: { name: 'Fixture' }, server: { type: 'node', entry_point: 'index.js', mcp_config: { command: 'node', args: ['${__dirname}/index.js'] } } }
    const before = JSON.stringify(manifest)
    checkManifestStructure(manifest)
    checkManifestTextSize(before)
    checkManifestByteSize(new TextEncoder().encode(before))
    expect(JSON.stringify(manifest)).toBe(before)
  })
  test('enforces byte size for both raw input paths, including multibyte text', () => {
    checkManifestTextSize('a'.repeat(MAX_MANIFEST_BYTES))
    checkManifestByteSize(new Uint8Array(MAX_MANIFEST_BYTES))
    expect(() => checkManifestTextSize('a'.repeat(MAX_MANIFEST_BYTES + 1))).toThrow('JSON size')
    expect(() => checkManifestTextSize('é'.repeat(MAX_MANIFEST_BYTES / 2 + 1))).toThrow('JSON size')
    expect(() => checkManifestByteSize(new Uint8Array(MAX_MANIFEST_BYTES + 1))).toThrow('JSON size')
  })
  test('rejects oversized collections before visiting their elements', () => {
    const payload = Array(MAX_MANIFEST_COLLECTION_ITEMS + 1).fill(null)
    Object.defineProperty(payload, '0', { get() { throw new Error('element was visited') } })
    expect(() => checkManifestStructure({ tools: payload })).toThrow('collection is too large')
    expect(() => checkManifestStructure(Object.fromEntries(Array.from({ length: MAX_MANIFEST_COLLECTION_ITEMS + 1 }, (_, i) => [`key${i}`, null])))).toThrow('collection is too large')
  })
  test('bounds the total node count across many smaller collections', () => {
    expect(() => checkManifestStructure(Array.from({ length: 100 }, () => Array(100).fill(1)))).toThrow('too many values')
  })
  test('rejects deep and cyclic data without recursive stack growth', () => {
    let nested: unknown = null
    for (let i = 0; i <= MAX_MANIFEST_DEPTH; i++) nested = [nested]
    expect(() => checkManifestStructure(nested)).toThrow('nesting is too deep')
    const cyclic: { self?: unknown } = {}
    cyclic.self = cyclic
    expect(() => checkManifestStructure(cyclic)).toThrow('nesting is too deep')
  })
  test('also bounds strings supplied through the object API', () => {
    expect(() => checkManifestStructure({ text: 'a'.repeat(MAX_MANIFEST_BYTES + 1) })).toThrow('text content')
  })
})
