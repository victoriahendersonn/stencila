---
title:
- type: Text
  value: Comment
---

# Comment

**A comment on an item, e.g on a Article, or SoftwareSourceCode.**

Use the `about` property to define the item that a comment is on and
`commentAspect` to point to a specific part of aspect of that item.
The `content` property should be used for the structured content of the
comment, in preference to the schema.org `text` property (which is expected to
be plain text). Replies to a comment can be added to its `comments` property
or have their `parentItem` set to the parent comment.


**`@id`**: [`schema:Comment`](https://schema.org/Comment)

## Properties

The `Comment` type has these properties:

| Name           | `@id`                                                      | Type                                                                                                                                                              | Description                                                                                                              | Inherited from                                                                   |
| -------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| id             | [`schema:id`](https://schema.org/id)                       | [`String`](https://stencila.dev/docs/reference/schema/data/string)                                                                                                | The identifier for this item                                                                                             | [`Entity`](https://stencila.dev/docs/reference/schema/other/entity)              |
| alternateNames | [`schema:alternateName`](https://schema.org/alternateName) | [`String`](https://stencila.dev/docs/reference/schema/data/string)*                                                                                               | Alternate names (aliases) for the item.                                                                                  | [`Thing`](https://stencila.dev/docs/reference/schema/other/thing)                |
| description    | [`schema:description`](https://schema.org/description)     | [`Block`](https://stencila.dev/docs/reference/schema/prose/block)*                                                                                                | A description of the item.                                                                                               | [`Thing`](https://stencila.dev/docs/reference/schema/other/thing)                |
| identifiers    | [`schema:identifier`](https://schema.org/identifier)       | ([`PropertyValue`](https://stencila.dev/docs/reference/schema/other/property-value) \| [`String`](https://stencila.dev/docs/reference/schema/data/string))*       | Any kind of identifier for any kind of Thing.                                                                            | [`Thing`](https://stencila.dev/docs/reference/schema/other/thing)                |
| images         | [`schema:image`](https://schema.org/image)                 | ([`ImageObject`](https://stencila.dev/docs/reference/schema/works/image-object) \| [`String`](https://stencila.dev/docs/reference/schema/data/string))*           | Images of the item.                                                                                                      | [`Thing`](https://stencila.dev/docs/reference/schema/other/thing)                |
| name           | [`schema:name`](https://schema.org/name)                   | [`String`](https://stencila.dev/docs/reference/schema/data/string)                                                                                                | The name of the item.                                                                                                    | [`Thing`](https://stencila.dev/docs/reference/schema/other/thing)                |
| url            | [`schema:url`](https://schema.org/url)                     | [`String`](https://stencila.dev/docs/reference/schema/data/string)                                                                                                | The URL of the item.                                                                                                     | [`Thing`](https://stencila.dev/docs/reference/schema/other/thing)                |
| about          | [`schema:about`](https://schema.org/about)                 | [`ThingType`](https://stencila.dev/docs/reference/schema/other/thing-type)*                                                                                       | The subject matter of the content.                                                                                       | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| authors        | [`schema:author`](https://schema.org/author)               | ([`Person`](https://stencila.dev/docs/reference/schema/other/person) \| [`Organization`](https://stencila.dev/docs/reference/schema/other/organization))*         | The authors of this creative work.                                                                                       | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| comments       | [`schema:comment`](https://schema.org/comment)             | [`Comment`](https://stencila.dev/docs/reference/schema/works/comment)*                                                                                            | Comments about this creative work.                                                                                       | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| content        | `stencila:content`                                         | [`Block`](https://stencila.dev/docs/reference/schema/prose/block)*                                                                                                | The structured content of this creative work c.f. property `text`.                                                       | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| dateCreated    | [`schema:dateCreated`](https://schema.org/dateCreated)     | [`Date`](https://stencila.dev/docs/reference/schema/data/date)                                                                                                    | Date/time of creation.                                                                                                   | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| dateReceived   | [`schema:dateReceived`](https://schema.org/dateReceived)   | [`Date`](https://stencila.dev/docs/reference/schema/data/date)                                                                                                    | Date/time that work was received.                                                                                        | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| dateAccepted   | `stencila:dateAccepted`                                    | [`Date`](https://stencila.dev/docs/reference/schema/data/date)                                                                                                    | Date/time of acceptance.                                                                                                 | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| dateModified   | [`schema:dateModified`](https://schema.org/dateModified)   | [`Date`](https://stencila.dev/docs/reference/schema/data/date)                                                                                                    | Date/time of most recent modification.                                                                                   | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| datePublished  | [`schema:datePublished`](https://schema.org/datePublished) | [`Date`](https://stencila.dev/docs/reference/schema/data/date)                                                                                                    | Date of first publication.                                                                                               | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| editors        | [`schema:editor`](https://schema.org/editor)               | [`Person`](https://stencila.dev/docs/reference/schema/other/person)*                                                                                              | People who edited the `CreativeWork`.                                                                                    | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| funders        | [`schema:funder`](https://schema.org/funder)               | ([`Person`](https://stencila.dev/docs/reference/schema/other/person) \| [`Organization`](https://stencila.dev/docs/reference/schema/other/organization))*         | People or organizations that funded the `CreativeWork`.                                                                  | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| fundedBy       | `stencila:fundedBy`                                        | ([`Grant`](https://stencila.dev/docs/reference/schema/other/grant) \| [`MonetaryGrant`](https://stencila.dev/docs/reference/schema/other/monetary-grant))*        | Grants that funded the `CreativeWork`; reverse of `fundedItems`.                                                         | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| genre          | [`schema:genre`](https://schema.org/genre)                 | [`String`](https://stencila.dev/docs/reference/schema/data/string)*                                                                                               | Genre of the creative work, broadcast channel or group.                                                                  | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| keywords       | [`schema:keywords`](https://schema.org/keywords)           | [`String`](https://stencila.dev/docs/reference/schema/data/string)*                                                                                               | Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas.   | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| isPartOf       | [`schema:isPartOf`](https://schema.org/isPartOf)           | [`CreativeWorkType`](https://stencila.dev/docs/reference/schema/works/creative-work-type)                                                                         | An item or other CreativeWork that this CreativeWork is a part of.                                                       | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| licenses       | [`schema:license`](https://schema.org/license)             | ([`CreativeWorkType`](https://stencila.dev/docs/reference/schema/works/creative-work-type) \| [`String`](https://stencila.dev/docs/reference/schema/data/string))* | License documents that applies to this content, typically indicated by URL.                                              | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| maintainers    | [`schema:maintainer`](https://schema.org/maintainer)       | ([`Person`](https://stencila.dev/docs/reference/schema/other/person) \| [`Organization`](https://stencila.dev/docs/reference/schema/other/organization))*         | The people or organizations who maintain this CreativeWork.                                                              | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| parts          | [`schema:hasParts`](https://schema.org/hasParts)           | [`CreativeWorkType`](https://stencila.dev/docs/reference/schema/works/creative-work-type)*                                                                        | Elements of the collection which can be a variety of different elements, such as Articles, Datatables, Tables and more.  | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| publisher      | [`schema:publisher`](https://schema.org/publisher)         | [`Person`](https://stencila.dev/docs/reference/schema/other/person) \| [`Organization`](https://stencila.dev/docs/reference/schema/other/organization)            | A publisher of the CreativeWork.                                                                                         | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| references     | [`schema:citation`](https://schema.org/citation)           | ([`CreativeWorkType`](https://stencila.dev/docs/reference/schema/works/creative-work-type) \| [`String`](https://stencila.dev/docs/reference/schema/data/string))* | References to other creative works, such as another publication, web page, scholarly article, etc.                       | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| text           | [`schema:text`](https://schema.org/text)                   | [`String`](https://stencila.dev/docs/reference/schema/data/string)                                                                                                | The textual content of this creative work.                                                                               | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| title          | [`schema:headline`](https://schema.org/headline)           | [`Inline`](https://stencila.dev/docs/reference/schema/prose/inline)*                                                                                              | The title of the creative work.                                                                                          | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| version        | [`schema:version`](https://schema.org/version)             | [`String`](https://stencila.dev/docs/reference/schema/data/string) \| [`Number`](https://stencila.dev/docs/reference/schema/data/number)                          | The version of the creative work.                                                                                        | [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work) |
| parentItem     | [`schema:parentItem`](https://schema.org/parentItem)       | [`Comment`](https://stencila.dev/docs/reference/schema/works/comment)                                                                                             | The parent comment of this comment.                                                                                      | [`Comment`](https://stencila.dev/docs/reference/schema/works/comment)            |
| commentAspect  | `stencila:commentAspect`                                   | [`String`](https://stencila.dev/docs/reference/schema/data/string)                                                                                                | The part or facet of the item that is being commented on.                                                                | [`Comment`](https://stencila.dev/docs/reference/schema/works/comment)            |

## Related

The `Comment` type is related to these types:

- Parents: [`CreativeWork`](https://stencila.dev/docs/reference/schema/works/creative-work)
- Children: none

## Formats

The `Comment` type can be encoded (serialized) to, and/or decoded (deserialized) from, these formats:

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

The `Comment` type is represented in these bindings:

- [JSON-LD](https://stencila.dev/Comment.jsonld)
- [JSON Schema](https://stencila.dev/Comment.schema.json)
- Python class [`Comment`](https://github.com/stencila/stencila/blob/main/python/stencila/types/comment.py)
- Rust struct [`Comment`](https://github.com/stencila/stencila/blob/main/rust/schema/src/types/comment.rs)
- TypeScript class [`Comment`](https://github.com/stencila/stencila/blob/main/typescript/src/types/Comment.ts)

## Source

This documentation was generated from [`Comment.yaml`](https://github.com/stencila/stencila/blob/main/schema/Comment.yaml) by [`docs.rs`](https://github.com/stencila/stencila/blob/main/rust/schema-gen/src/docs.rs).