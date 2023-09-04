# YAML

## Introduction

[YAML (YAML Ain't Markup Language)](https://yaml.org/) is a human-readable data serialization format commonly used for configuration files and data representation. It is known for its simplicity and readability, making it a preferred choice for settings and data structures. YAML's structure is based on indentation, allowing users to represent data hierarchies in an easily understandable manner. 

Its benefits include human-friendly syntax and support for complex data structures. It is a good choice for lossless serialization of Stencila documents when human-readability is important.

## Encoding & decoding

Stencila support lossless, bi-directional conversion between Stencila documents and YAML. This is powered by the [`serde_yaml`](https://crates.io/crates/serde_yaml) Rust crate.

When the `--standalone` option is used, two properties are added to the YAML encoding of root nodes to improve interoperability:

- a `$schema` property which links to the [JSON Schema](https://json-schema.org) for the node type
- a `@context` property which links to the [JSON-LD](https://json-ld.org) context for the node type

For example,

```yaml
$schema: https://stencila.dev/Article.schema.json
'@context': https://stencila.dev/Article.jsonld
type: Article
...
```