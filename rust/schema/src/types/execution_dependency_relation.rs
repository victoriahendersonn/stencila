use crate::prelude::*;

/// The relation between a node and its execution dependency.
#[rustfmt::skip]
#[derive(Debug, Clone, PartialEq, Display, Serialize, Deserialize, Strip, Defaults, Read, Write, ToHtml)]
#[serde(crate = "common::serde")]
#[def = "Uses"]
pub enum ExecutionDependencyRelation {
    Calls,
    Derives,
    Imports,
    Includes,
    Reads,
    Uses,
}
