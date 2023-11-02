use std::str::FromStr;

use codec_losses::lost_work_options;

use crate::{prelude::*, Claim, ClaimType};

impl Claim {
    pub fn to_markdown_special(&self, context: &MarkdownEncodeContext) -> (String, Losses) {
        let fence = ":".repeat(3 + context.depth * 2);

        let mut md = [&fence, " ", &self.claim_type.to_string().to_lowercase()].concat();
        let mut losses = lost_work_options!(self);

        if let Some(label) = &self.label {
            md.push(' ');
            md.push_str(label);
        }

        md.push_str("\n\n");

        let (content_md, content_losses) = self.content.to_markdown(context);
        md.push_str(&content_md);
        losses.merge(content_losses);

        md.push_str(&fence);
        md.push_str("\n\n");

        (md, losses)
    }
}

impl FromStr for ClaimType {
    type Err = ErrReport;

    fn from_str(string: &str) -> Result<Self, Self::Err> {
        use ClaimType::*;
        match string.to_lowercase().as_str() {
            "corollary" => Ok(Corollary),
            "hypothesis" => Ok(Hypothesis),
            "lemma" => Ok(Lemma),
            "postulate" => Ok(Postulate),
            "proof" => Ok(Proof),
            "proposition" => Ok(Proposition),
            "statement" => Ok(Statement),
            "theorem" => Ok(Theorem),
            _ => bail!("Invalid string for `ClaimType`: {string}"),
        }
    }
}