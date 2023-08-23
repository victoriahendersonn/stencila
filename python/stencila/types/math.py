# Generated file; do not edit. See the Rust `schema-gen` crate.

from .prelude import *

from .entity import Entity
from .execution_digest import ExecutionDigest


@dataclass(kw_only=True, frozen=True)
class Math(Entity):
    """
    Abstract base type for a mathematical variable or equation.
    """

    type: Literal["Math"] = field(default="Math", init=False)

    math_language: str
    """The language used for the equation e.g tex, mathml, asciimath."""

    code: str
    """The code of the equation in the `mathLanguage`."""

    compile_digest: Optional[ExecutionDigest] = None
    """A digest of the `code` and `mathLanguage` used to avoid unnecessary transpilation to MathML"""

    errors: Optional[List[str]] = None
    """Errors that occurred when parsing the math equation."""

    mathml: Optional[str] = None
    """The MathML transpiled from the `code`"""