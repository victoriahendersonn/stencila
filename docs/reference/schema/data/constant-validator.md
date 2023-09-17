---
title:
- type: Text
  value: ConstantValidator
---

# Constant Validator

**A validator specifying a constant value that a node must have.**

A node will be valid against this validator if it is equal to the
`value` property. Analogous to the JSON Schema [`const` keyword](https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1.3).


**`@id`**: `stencila:ConstantValidator`

## Properties

The `ConstantValidator` type has these properties:

| Name  | `@id`                                      | Type                                                               | Description                        | Inherited from                                                                            |
| ----- | ------------------------------------------ | ------------------------------------------------------------------ | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| id    | [`schema:id`](https://schema.org/id)       | [`String`](https://stencila.dev/docs/reference/schema/data/string) | The identifier for this item       | [`Entity`](https://stencila.dev/docs/reference/schema/other/entity)                       |
| value | [`schema:value`](https://schema.org/value) | [`Node`](https://stencila.dev/docs/reference/schema/other/node)    | The value that the node must have. | [`ConstantValidator`](https://stencila.dev/docs/reference/schema/data/constant-validator) |

## Related

The `ConstantValidator` type is related to these types:

- Parents: [`Entity`](https://stencila.dev/docs/reference/schema/other/entity)
- Children: none

## Formats

The `ConstantValidator` type can be encoded (serialized) to, and/or decoded (deserialized) from, these formats:

| Format                                                           | Encoding       | Decoding     | Status                 | Notes |
| ---------------------------------------------------------------- | -------------- | ------------ | ---------------------- | ----- |
| [HTML](https://stencila.dev/docs/reference/formats/{name})       | 🔷 Low loss     |              | 🚧 Under development    |       |
| [Markdown](https://stencila.dev/docs/reference/formats/{name})   | 🟥 High loss    |              | 🚧 Under development    |       |
| [Plain text](https://stencila.dev/docs/reference/formats/{name}) | 🟥 High loss    |              | 🟥 Alpha                |       |
| [JSON](https://stencila.dev/docs/reference/formats/{name})       | 🟢 No loss      | 🟢 No loss    | 🟢 Stable               |       |
| [JSON5](https://stencila.dev/docs/reference/formats/{name})      | 🟢 No loss      | 🟢 No loss    | 🟢 Stable               |       |
| [YAML](https://stencila.dev/docs/reference/formats/{name})       | 🟢 No loss      | 🟢 No loss    | 🟢 Stable               |       |
| [Debug](https://stencila.dev/docs/reference/formats/{name})      | 🔷 Low loss     |              | 🟢 Stable               |       |

## Bindings

The `ConstantValidator` type is represented in these bindings:

- [JSON-LD](https://stencila.dev/ConstantValidator.jsonld)
- [JSON Schema](https://stencila.dev/ConstantValidator.schema.json)
- Python class [`ConstantValidator`](https://github.com/stencila/stencila/blob/main/python/stencila/types/constant_validator.py)
- Rust struct [`ConstantValidator`](https://github.com/stencila/stencila/blob/main/rust/schema/src/types/constant_validator.rs)
- TypeScript class [`ConstantValidator`](https://github.com/stencila/stencila/blob/main/typescript/src/types/ConstantValidator.ts)

## Source

This documentation was generated from [`ConstantValidator.yaml`](https://github.com/stencila/stencila/blob/main/schema/ConstantValidator.yaml) by [`docs.rs`](https://github.com/stencila/stencila/blob/main/rust/schema-gen/src/docs.rs).