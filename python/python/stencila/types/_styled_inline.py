# Generated file; do not edit. See the Rust `schema-gen` crate.

from .prelude import *

from ._author import Author
from ._compilation_digest import CompilationDigest
from ._compilation_error import CompilationError
from ._cord import Cord
from ._inline import Inline
from ._styled import Styled


@dataclass(init=False)
class StyledInline(Styled):
    """
    Styled inline content.
    """

    type: Literal["StyledInline"] = field(default="StyledInline", init=False)

    content: List[Inline]
    """The content within the span."""

    def __init__(self, code: Cord, content: List[Inline], id: Optional[str] = None, style_language: Optional[str] = None, authors: Optional[List[Author]] = None, compilation_digest: Optional[CompilationDigest] = None, compilation_errors: Optional[List[CompilationError]] = None, css: Optional[str] = None, classes: Optional[List[str]] = None):
        super().__init__(id = id, code = code, style_language = style_language, authors = authors, compilation_digest = compilation_digest, compilation_errors = compilation_errors, css = css, classes = classes)
        self.content = content
