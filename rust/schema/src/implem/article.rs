use common::serde_yaml;

use crate::{prelude::*, Article};

impl Article {
    pub fn to_jats_special(&self) -> (String, Losses) {
        use codec_jats_trait::encode::elem;

        let mut losses = Losses::none();

        let front = elem("front", [], "");

        let (content_jats, mut content_losses) = self.content.to_jats();
        let body = elem("body", [], content_jats);
        losses.append(&mut content_losses);

        let back = elem("back", [], "");

        (
            elem(
                "article",
                [
                    ("dtd-version".to_string(), "1.3".to_string()),
                    (
                        "xmlns:xlink".to_string(),
                        "http://www.w3.org/1999/xlink".to_string(),
                    ),
                    (
                        "xmlns:mml".to_string(),
                        "http://www.w3.org/1998/Math/MathML".to_string(),
                    ),
                ],
                [front, body, back].concat(),
            ),
            losses,
        )
    }

    pub fn to_markdown_special(&self) -> (String, Losses) {
        let mut md = String::new();

        let mut yaml = serde_yaml::to_value(Self {
            // Avoid serializing content
            content: Vec::new(),
            ..self.clone()
        })
        .unwrap_or_default();

        if let Some(yaml) = yaml.as_mapping_mut() {
            // Remove the type and (empty array) content
            yaml.remove("type");
            yaml.remove("content");

            // Only add a YAML header if there are remaining keys
            if !yaml.is_empty() {
                let yaml = serde_yaml::to_string(&yaml).unwrap_or_default();
                md += "---\n";
                md += &yaml;
                md += "---\n\n";
            }
        }

        let (content_md, losses) = self.content.to_markdown();
        md += &content_md;

        (md, losses)
    }
}