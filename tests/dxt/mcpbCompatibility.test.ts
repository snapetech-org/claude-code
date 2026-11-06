import { expect, test } from 'bun:test'
import { vAny } from '@snapetech/mcpb-browser/browser'
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
