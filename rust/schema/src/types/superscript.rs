// Generated file. Do not edit; see `schema-gen` crate.

use crate::prelude::*;

use super::inline::Inline;
use super::string::String;

/// Superscripted content.
#[rustfmt::skip]
#[skip_serializing_none]
#[derive(Debug, Defaults, Clone, PartialEq, Serialize, Deserialize, Strip, Read, Write, ToHtml)]
#[serde(rename_all = "camelCase", crate = "common::serde")]
pub struct Superscript {
    /// The type of this item
    pub r#type: MustBe!("Superscript"),

    /// The identifier for this item
    pub id: Option<String>,

    /// The content that is marked.
    pub content: Vec<Inline>,
}

impl Superscript {
    #[rustfmt::skip]
    pub fn new(content: Vec<Inline>) -> Self {
        Self {
            content,
            ..Default::default()
        }
    }
}