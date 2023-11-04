# Generated file; do not edit. See the Rust `schema-gen` crate.

from .prelude import *

from .cord import Cord
from .execution_digest import ExecutionDigest
from .math import Math


@dataclass(init=False)
class MathFragment(Math):
    """
    A fragment of math, e.g a variable name, to be treated as inline content.
    """

    type: Literal["MathFragment"] = field(default="MathFragment", init=False)

    def __init__(self, code: Cord, id: Optional[str] = None, math_language: Optional[str] = None, compilation_digest: Optional[ExecutionDigest] = None, compilation_errors: Optional[List[str]] = None, mathml: Optional[str] = None):
        super().__init__(id = id, code = code, math_language = math_language, compilation_digest = compilation_digest, compilation_errors = compilation_errors, mathml = mathml)
        
