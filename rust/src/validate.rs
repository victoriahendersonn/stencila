use anyhow::{bail, Result};
use jsonschema::JSONSchema;
use once_cell::sync::Lazy;
use serde_json::{json, Value};

use crate::nodes::Node;

pub fn validate(node: Node) -> Result<Node> {
    static SCHEMA: Lazy<Value> = Lazy::new(|| json!({ "maxLength": 5, "pattern": "aaa" }));
    static VALIDATOR: Lazy<JSONSchema<'static>> =
        Lazy::new(|| JSONSchema::compile(&SCHEMA).unwrap());

    let result = VALIDATOR.validate(&node);
    match result {
        Ok(_) => Ok(Node::Bool(true)),
        Err(errors) => {
            let message = errors
                .map(|error| error.to_string())
                .collect::<Vec<String>>()
                .join("; ");
            bail!("{}", message)
        }
    }
}

#[cfg(any(feature = "request", feature = "serve"))]
pub mod rpc {
    use super::*;
    use serde::{Deserialize, Serialize};

    #[derive(Debug, Serialize, Deserialize)]
    pub struct Params {
        pub node: Node,
    }

    pub fn validate(params: Params) -> Result<Node> {
        let Params { node } = params;
        super::validate(node)
    }
}

#[cfg(feature = "cli")]
pub mod cli {
    use super::*;
    use crate::decode::decode;
    use structopt::StructOpt;

    #[derive(Debug, StructOpt)]
    #[structopt(
        about = "Validate", // TODO about
        setting = structopt::clap::AppSettings::DeriveDisplayOrder
    )]
    pub struct Args {
        /// TODO docs
        input: String,

        /// TODO docs
        #[structopt(short, long)]
        format: Option<String>,
    }

    pub fn validate(args: Args) -> Result<()> {
        let Args { input, format } = args;

        let node = decode(input, format.unwrap_or_default())?;

        super::validate(node)?;

        Ok(())
    }
}
