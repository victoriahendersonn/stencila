# Generated file; do not edit. See the Rust `schema-gen` crate.

from .prelude import *

from ._author import Author
from ._code_static import CodeStatic
from ._cord import Cord


@dataclass(init=False)
class CodeInline(CodeStatic):
    """
    Inline code.
    """

    type: Literal["CodeInline"] = field(default="CodeInline", init=False)

    def __init__(self, code: Cord, id: Optional[str] = None, programming_language: Optional[str] = None, authors: Optional[List[Author]] = None):
        super().__init__(id = id, code = code, programming_language = programming_language, authors = authors)
        
