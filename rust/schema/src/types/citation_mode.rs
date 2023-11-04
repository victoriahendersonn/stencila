// Generated file; do not edit. See `schema-gen` crate.

use crate::prelude::*;

/// The mode of a `Cite`.
#[derive(Debug, strum::Display, Clone, PartialEq, Serialize, Deserialize, StripNode, HtmlCodec, JatsCodec, MarkdownCodec, TextCodec, WriteNode, SmartDefault, strum::EnumString, ReadNode)]
#[serde(crate = "common::serde")]
#[strum(ascii_case_insensitive, crate = "common::strum")]
pub enum CitationMode {
    #[default]
    Parenthetical,

    Narrative,

    NarrativeAuthor,
}
