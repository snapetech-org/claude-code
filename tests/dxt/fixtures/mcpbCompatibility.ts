// Synthetic compatibility cases checked against the published MCPB 2.1.2 browser API.
export const versions = ['0.1', '0.2', '0.3', '0.4'] as const
export function manifest(version: string): Record<string, any> {
  return {
    manifest_version: version, name: 'compatibility-fixture', version: '1.0.0', description: 'Synthetic compatibility fixture',
    author: { name: 'Fixture', url: 'https://example.com' },
    server: { type: 'node', entry_point: 'server.js', mcp_config: { command: 'node', args: ['${__dirname}/server.js'] } },
  }
}
export const variants: { name: string; accepted: readonly string[]; apply: (value: Record<string, any>) => unknown }[] = [
  { name: 'minimal', accepted: versions, apply: value => value },
  { name: 'legacy version key', accepted: versions, apply: value => { value.dxt_version = value.manifest_version; delete value.manifest_version; return value } },
  { name: 'unknown field', accepted: [], apply: value => ({ ...value, unexpected: true }) },
  { name: 'invalid author URL', accepted: [], apply: value => { value.author.url = 'not-a-url'; return value } },
  { name: 'invalid environment value', accepted: [], apply: value => { value.server.mcp_config.env = { FIXTURE: 42 }; return value } },
  { name: 'invalid collection member', accepted: [], apply: value => ({ ...value, keywords: ['valid', 42] }) },
  { name: 'missing version', accepted: [], apply: value => { delete value.manifest_version; return value } },
  { name: 'localized resources', accepted: ['0.3', '0.4'], apply: value => ({ ...value, localization: { resources: 'locales/${locale}.json', default_locale: 'en-CA' } }) },
  { name: 'metadata namespace', accepted: ['0.3', '0.4'], apply: value => ({ ...value, _meta: { fixture: { enabled: true } } }) },
  { name: 'uv server', accepted: ['0.4'], apply: value => { value.server.type = 'uv'; return value } },
]
