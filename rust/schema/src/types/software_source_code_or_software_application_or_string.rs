// Generated file; do not edit. See `schema-gen` crate.

use crate::prelude::*;

use super::software_application::SoftwareApplication;
use super::software_source_code::SoftwareSourceCode;
use super::string::String;

/// [`SoftwareSourceCode`] or [`SoftwareApplication`] or [`String`]
#[derive(Debug, strum::Display, Clone, PartialEq, Serialize, Deserialize, StripNode, WalkNode, DomCodec, HtmlCodec, JatsCodec, MarkdownCodec, TextCodec, WriteNode, SmartDefault, ReadNode)]
#[serde(untagged, crate = "common::serde")]
pub enum SoftwareSourceCodeOrSoftwareApplicationOrString {
    #[default]
    SoftwareSourceCode(SoftwareSourceCode),

    SoftwareApplication(SoftwareApplication),

    String(String),
}
