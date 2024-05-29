import { Inline } from "@stencila/types";
import { MySTEncodeContext } from "./encoder.js";

/**
 * Encode an array of Stencila `Inline` nodes to MyST
 */
export function encodeInlines(inlines: Inline[], context: MySTEncodeContext) {
  for (const inline of inlines) {
    encodeInline(inline, context);
  }
}

/**
 * Encode a Stencila `Inline` node to MyST
 */
export function encodeInline(inline: Inline, context: MySTEncodeContext) {
  if (inline == null) {
    context.pushString("null");
    return;
  } else if (typeof inline === "boolean" || typeof inline === "number") {
    context.pushString(inline.toString());
    return;
  }

  context.enterNode(inline.type, inline.id ?? "");

  switch (inline.type) {
    case "Text":
      context.pushString(escapeMarkdown(inline.value));
      break;
    case "CodeInline":
      context.pushString("`" + inline.code + "`");
      break;
    case "Underline":
      context.pushString("{u}`");
      encodeInlines(inline.content, context);
      context.pushString("`");
      break;
    case "Strong":
      context.pushString("**");
      encodeInlines(inline.content, context);
      context.pushString("**");
      break;
    case "Emphasis":
      context.pushString("_");
      encodeInlines(inline.content, context);
      context.pushString("_");
      break;
    case "ImageObject":
      context.pushString(
        "![" + (inline.text ?? "") + "](" + inline.contentUrl + ")"
      );
      break;
    case "AudioObject":
    case "Button":
    case "Cite":
    case "CiteGroup":
    case "CodeExpression":
    case "Date":
    case "DateTime":
    case "DeleteInline":
    case "Duration":
    case "InsertInline":
    case "InstructionInline":
    case "Link":
    case "MathInline":
    case "MediaObject":
    case "ModifyInline":
    case "Note":
    case "Parameter":
    case "QuoteInline":
    case "ReplaceInline":
    case "StyledInline":
    case "Strikeout":
    case "Subscript":
    case "Superscript":
    case "Text":
    case "Time":
    case "Timestamp":
    case "VideoObject":
    default:
      throw new Error(`Not yet implemented: ${inline.type}`);
  }

  context.exitNode();
}

// TODO: There might be more chars. Maybe find a library that does markdown escaping
// e.g. markdown-escape
const SPECIAL_CHARS = ["\\", "_", "*"];
const escapeMarkdown = (s: string) => {
  SPECIAL_CHARS.forEach(
    (char) => (s = s.replace(new RegExp("\\" + char, "g"), `\\${char}`))
  );
  return s;
};
