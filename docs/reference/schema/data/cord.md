---
title:
- type: Text
  value: Cord
---

# Cord

**A value comprised of a sequence of characters**

This type exists to differentiate between between a plain string of characters
(which is modified by complete replacement) and a sequence of characters stored and
synchronized as a CRDT (which is is modified by insertions and deletions).

Its use includes the `value` property of the `Text` type and the `code`
property of `CodeExecutable` nodes.


**`@id`**: `stencila:Cord`

## Formats

The `Cord` type can be encoded (serialized) to, and/or decoded (deserialized) from, these formats:

| Format                                                           | Encoding | Decoding | Status                 | Notes |
| ---------------------------------------------------------------- | -------- | -------- | ---------------------- | ----- |
| [HTML](https://stencila.dev/docs/reference/formats/{name})       |          |          | 🚧 Under development    |       |
| [Markdown](https://stencila.dev/docs/reference/formats/{name})   |          |          | 🚧 Under development    |       |
| [Plain text](https://stencila.dev/docs/reference/formats/{name}) |          |          | 🟥 Alpha                |       |
| [JSON](https://stencila.dev/docs/reference/formats/{name})       |          |          | 🟢 Stable               |       |
| [JSON5](https://stencila.dev/docs/reference/formats/{name})      |          |          | 🟢 Stable               |       |
| [YAML](https://stencila.dev/docs/reference/formats/{name})       |          |          | 🟢 Stable               |       |
| [Debug](https://stencila.dev/docs/reference/formats/{name})      |          |          | 🟢 Stable               |       |

## Bindings

The `Cord` type is represented in these bindings:

- [JSON-LD](https://stencila.dev/Cord.jsonld)
- [JSON Schema](https://stencila.dev/Cord.schema.json)
- Python type [`Cord`](https://github.com/stencila/stencila/blob/main/python/stencila/types/cord.py)
- Rust type [`Cord`](https://github.com/stencila/stencila/blob/main/rust/schema/src/types/cord.rs)
- TypeScript type [`Cord`](https://github.com/stencila/stencila/blob/main/typescript/src/types/Cord.ts)

## Source

This documentation was generated from [`Cord.yaml`](https://github.com/stencila/stencila/blob/main/schema/Cord.yaml) by [`docs.rs`](https://github.com/stencila/stencila/blob/main/rust/schema-gen/src/docs.rs).