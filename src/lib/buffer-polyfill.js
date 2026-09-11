import { Buffer } from 'buffer'

// gray-matter pulls in js-yaml's binary type support, which references the
// Node `Buffer` global even when front matter never uses it. Must be
// imported before anything that transitively imports gray-matter.
if (typeof globalThis.Buffer === 'undefined') {
  globalThis.Buffer = Buffer
}
