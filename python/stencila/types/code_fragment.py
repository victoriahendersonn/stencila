# Generated file; do not edit. See the Rust `schema-gen` crate.

from .prelude import *

from .code_static import CodeStatic


@dataclass(kw_only=True, frozen=True)
class CodeFragment(CodeStatic):
    """
    Inline code.
    """

    type: Literal["CodeFragment"] = field(default="CodeFragment", init=False)

    code: str
    """The code."""

    programming_language: Optional[str] = None
    """The programming language of the code."""

    media_type: Optional[str] = None
    """Media type, typically expressed using a MIME format, of the code."""