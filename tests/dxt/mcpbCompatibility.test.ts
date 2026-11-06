import { expect, test } from 'bun:test'
import { replaceVariables, vAny } from '@snapetech/mcpb-browser/browser'
import { manifest, variants, versions } from './fixtures/mcpbCompatibility.js'

for (const version of versions) {
  for (const variant of variants) {
    test(`MCPB ${version}: retains upstream ${variant.name} acceptance`, () => {
      const input = variant.apply(manifest(version))
      const result = vAny.McpbManifestSchema.safeParse(input)
      expect(result.success).toBe(variant.accepted.includes(version))
      if (result.success) expect(result.data).toEqual(input)
    })
  }
}

test('MCPB placeholders treat configuration keys and replacement values literally', () => {
  expect(replaceVariables('${user_config.a.b} ${user_config.aXb}', { 'user_config.a.b': '$& $$' })).toBe('$& $$ ${user_config.aXb}')
  expect(replaceVariables('${user_config.[name]}', { 'user_config.[name]': 'literal' })).toBe('literal')
})

test('MCPB array-context warnings omit configuration values', () => {
  const previous = console.warn
  const warnings: unknown[][] = []
  console.warn = (...args: unknown[]) => { warnings.push(args) }
  try {
    const input = 'fixture-private-value ${user_config.fixture}'
    expect(replaceVariables(input, { 'user_config.fixture': ['fixture-private-secret'] })).toBe(input)
    expect(warnings.length).toBe(1)
    expect(JSON.stringify(warnings)).not.toContain('fixture-private-value')
    expect(JSON.stringify(warnings)).not.toContain('fixture-private-secret')
  } finally {
    console.warn = previous
  }
})
