import { describe, expect, test } from 'bun:test'
import { getMcpConfigForManifest } from '@anthropic-ai/mcpb/browser'
import { parseAndValidateManifestFromBytes, parseAndValidateManifestFromText, validateManifest } from '../../src/utils/dxt/helpers.js'
import { MAX_MANIFEST_BYTES, MAX_MANIFEST_COLLECTION_ITEMS } from '../../src/utils/dxt/manifestLimits.js'

function fixture(version: string) {
  return {
    manifest_version: version, name: 'fixture', version: '1.0.0', description: 'Fixture',
    author: { name: 'Fixture' },
    server: { type: 'node', entry_point: 'index.js', mcp_config: { command: 'node', args: ['${__dirname}/index.js'] } },
  }
}

describe('MCPB SDK manifest compatibility and input boundary', () => {
  for (const version of ['0.1', '0.2', '0.3', '0.4']) {
    test(`validates manifest ${version} through the installed SDK`, async () => {
      const text = JSON.stringify(fixture(version))
      const manifest = await parseAndValidateManifestFromText(text)
      expect(manifest.name).toBe('fixture')
      expect((await parseAndValidateManifestFromBytes(new TextEncoder().encode(text))).version).toBe('1.0.0')
      const config = await getMcpConfigForManifest({ manifest, extensionPath: '/fixture', userConfig: {}, pathSeparator: '/' })
      expect(config?.command).toBe('node')
      expect(config?.args).toEqual(['/fixture/index.js'])
    })
  }
  test('continues to validate legacy dxt_version manifests', async () => {
    const { manifest_version: _, ...rest } = fixture('0.1')
    expect((await validateManifest({ ...rest, dxt_version: '0.1' })).name).toBe('fixture')
  })
  test('retains invalid JSON and schema errors for bounded input', async () => {
    await expect(parseAndValidateManifestFromText('{')).rejects.toThrow('Invalid JSON')
    await expect(validateManifest({})).rejects.toThrow('Invalid manifest')
  })
  test('rejects oversized JSON before parsing or decoding it', async () => {
    await expect(parseAndValidateManifestFromText('x'.repeat(MAX_MANIFEST_BYTES + 1))).rejects.toThrow('validation limits')
    await expect(parseAndValidateManifestFromBytes(new Uint8Array(MAX_MANIFEST_BYTES + 1))).rejects.toThrow('validation limits')
  })
  test('rejects oversized collections before schema validation on every input path', async () => {
    const manifest = { ...fixture('0.3'), screenshots: Array(MAX_MANIFEST_COLLECTION_ITEMS + 1).fill(1) }
    await expect(validateManifest(manifest)).rejects.toThrow('collection is too large')
    await expect(parseAndValidateManifestFromText(JSON.stringify(manifest))).rejects.toThrow('collection is too large')
    await expect(parseAndValidateManifestFromBytes(new TextEncoder().encode(JSON.stringify(manifest)))).rejects.toThrow('collection is too large')
  })
})
