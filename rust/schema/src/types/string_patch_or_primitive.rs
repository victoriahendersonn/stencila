// Generated file; do not edit. See `schema-gen` crate.

use crate::prelude::*;

use super::primitive::Primitive;
use super::string_patch::StringPatch;

/// [`StringPatch`] or [`Primitive`]
#[derive(Debug, strum::Display, Clone, PartialEq, Serialize, Deserialize, StripNode, WalkNode, HtmlCodec, JatsCodec, MarkdownCodec, TextCodec, WriteNode)]
#[serde(untagged, crate = "common::serde")]
pub enum StringPatchOrPrimitive {
    StringPatch(StringPatch),

    Primitive(Primitive),
}