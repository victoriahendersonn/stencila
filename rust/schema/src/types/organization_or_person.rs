// Generated file; do not edit. See `schema-gen` crate.

use crate::prelude::*;

use super::organization::Organization;
use super::person::Person;

/// [`Organization`] or [`Person`]
#[derive(Debug, Display, Clone, PartialEq, Serialize, Deserialize, HtmlCodec, TextCodec, StripNode, Read, Write)]
#[serde(untagged, crate = "common::serde")]
pub enum OrganizationOrPerson {
    Organization(Organization),
    Person(Person),
}
