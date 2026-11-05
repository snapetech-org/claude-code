# MCPB manifest validation

Manifest data is bounded before JSON parsing, binary decoding, or SDK schema
validation. Text and binary input accept at most 1 MiB. Object validation accepts
at most 10,000 values, 1,000 entries per collection, 64 levels of nesting, and
1 MiB of aggregate key/string content. The iterative preflight bounds work and
prevents oversized collections from creating unbounded schema-error objects.
These limits apply to manifests; archive extraction has separate resource costs.

The installed MCPB SDK exposes its supported-version schema as
`vAny.McpbManifestSchema` through the browser entrypoint. Validation and config
generation use that API, retaining manifest versions 0.1 through 0.4 and legacy
`dxt_version` input. The SDK still depends on Zod 3 and its upstream dependency
alert remains open; no advisory suppression or unsupported Zod upgrade is used.

Run `npm run test:mcpb` for valid-version/config-generation fixtures, malformed
input, multibyte size limits, oversized collections, total node limits, deep
nesting, and cyclic object input.
