// Generated file; do not edit. See `schema-gen` crate.

use crate::prelude::*;

use super::integer::Integer;
use super::string::String;

/// [`Integer`] or [`String`]
#[derive(Debug, Display, Clone, PartialEq, Serialize, Deserialize, HtmlCodec, TextCodec, StripNode, Read, Write)]
#[serde(untagged, crate = "common::serde")]
pub enum IntegerOrString {
    Integer(Integer),
    String(String),
}
