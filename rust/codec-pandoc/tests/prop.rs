use codec::{utils::vec_string, CodecTrait, EncodeOptions};
use codec_pandoc::{decode_pandoc, encode_node, PandocCodec};
use test_utils::assert_json_eq;
use test_utils::{article, proptest::prelude::*, Freedom};

proptest! {
    #[test]
    fn test(input in article(
        Freedom::Min,
        PandocCodec::spec().unsupported_types,
        PandocCodec::spec().unsupported_properties,
    )) {
        let pandoc = encode_node(&input, Some(EncodeOptions{
            // To avoid loss, use RPNGs for the following types
            rpng_types: vec_string![
                "CodeChunk", "CodeExpression", "Parameter", "Button"
            ],
            // Because RPNGs are generated as temporary files in a directory that is
            // cleaned up at the end of the encode function (and thus not available to
            // the decode function) use RPNG alt text for reproducibility
            rpng_text: true,
            ..Default::default()
        })).unwrap();
        let output = decode_pandoc(pandoc).unwrap();
        assert_json_eq!(input, output);
    }
}
