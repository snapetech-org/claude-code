/** Bound untrusted input before the SDK can accumulate schema-validation issues. */
export const MAX_MANIFEST_BYTES = 1024 * 1024
export const MAX_MANIFEST_NODES = 10_000
export const MAX_MANIFEST_COLLECTION_ITEMS = 1_000
export const MAX_MANIFEST_DEPTH = 64

function limit(reason: string): never {
  throw new Error(`Manifest exceeds validation limits: ${reason}`)
}

export function checkManifestTextSize(text: string): void {
  if (text.length > MAX_MANIFEST_BYTES || Buffer.byteLength(text, 'utf8') > MAX_MANIFEST_BYTES) {
    limit('maximum JSON size is 1 MiB')
  }
}

export function checkManifestByteSize(bytes: Uint8Array): void {
  if (bytes.byteLength > MAX_MANIFEST_BYTES) limit('maximum JSON size is 1 MiB')
}

export function checkManifestStructure(input: unknown): void {
  const pending: { value: unknown; depth: number }[] = [{ value: input, depth: 0 }]
  let visited = 0
  let stringBytes = 0
  while (pending.length) {
    const { value, depth } = pending.pop()!
    if (++visited > MAX_MANIFEST_NODES) limit('too many values')
    if (depth > MAX_MANIFEST_DEPTH) limit('nesting is too deep')
    if (typeof value === 'string') {
      stringBytes += Buffer.byteLength(value, 'utf8')
    } else if (value !== null && typeof value === 'object') {
      const array = Array.isArray(value)
      const keys = array ? undefined : Object.keys(value)
      const count = array ? value.length : keys!.length
      if (count > MAX_MANIFEST_COLLECTION_ITEMS) limit('collection is too large')
      if (visited + pending.length + count > MAX_MANIFEST_NODES) limit('too many values')
      if (array) {
        for (let i = 0; i < value.length; i++) pending.push({ value: value[i], depth: depth + 1 })
      } else {
        for (const key of keys!) {
          stringBytes += Buffer.byteLength(key, 'utf8')
          pending.push({ value: (value as Record<string, unknown>)[key], depth: depth + 1 })
        }
      }
    }
    if (stringBytes > MAX_MANIFEST_BYTES) limit('text content is too large')
  }
}
