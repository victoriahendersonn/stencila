# Generated file; do not edit. See the Rust `schema-gen` crate.

from .prelude import *

from ._author import Author
from ._block import Block
Comment = ForwardRef("Comment")
from ._creative_work import CreativeWork
from ._creative_work_type import CreativeWorkType
from ._creative_work_type_or_text import CreativeWorkTypeOrText
from ._date import Date
from ._grant_or_monetary_grant import GrantOrMonetaryGrant
ImageObject = ForwardRef("ImageObject")
from ._inline import Inline
from ._person import Person
from ._person_or_organization import PersonOrOrganization
from ._property_value_or_str import PropertyValueOrStr
from ._str_or_float import StrOrFloat
from ._text import Text
from ._thing_type import ThingType


@dataclass(init=False)
class MediaObject(CreativeWork):
    """
    A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset.
    """

    type: Literal["MediaObject"] = field(default="MediaObject", init=False)

    bitrate: Optional[float] = None
    """Bitrate in megabits per second (Mbit/s, Mb/s, Mbps)."""

    content_size: Optional[float] = None
    """File size in megabits (Mbit, Mb)."""

    content_url: str
    """URL for the actual bytes of the media object, for example the image file or video file."""

    embed_url: Optional[str] = None
    """URL that can be used to embed the media on a web page via a specific media player."""

    media_type: Optional[str] = None
    """IANA media type (MIME type)."""

    def __init__(self, content_url: str, id: Optional[str] = None, alternate_names: Optional[List[str]] = None, description: Optional[Text] = None, identifiers: Optional[List[PropertyValueOrStr]] = None, images: Optional[List[ImageObject]] = None, name: Optional[str] = None, url: Optional[str] = None, about: Optional[List[ThingType]] = None, abstract: Optional[List[Block]] = None, authors: Optional[List[Author]] = None, contributors: Optional[List[Author]] = None, editors: Optional[List[Person]] = None, maintainers: Optional[List[PersonOrOrganization]] = None, comments: Optional[List[Comment]] = None, date_created: Optional[Date] = None, date_received: Optional[Date] = None, date_accepted: Optional[Date] = None, date_modified: Optional[Date] = None, date_published: Optional[Date] = None, funders: Optional[List[PersonOrOrganization]] = None, funded_by: Optional[List[GrantOrMonetaryGrant]] = None, genre: Optional[List[str]] = None, keywords: Optional[List[str]] = None, is_part_of: Optional[CreativeWorkType] = None, licenses: Optional[List[CreativeWorkTypeOrText]] = None, parts: Optional[List[CreativeWorkType]] = None, publisher: Optional[PersonOrOrganization] = None, references: Optional[List[CreativeWorkTypeOrText]] = None, text: Optional[Text] = None, title: Optional[List[Inline]] = None, version: Optional[StrOrFloat] = None, bitrate: Optional[float] = None, content_size: Optional[float] = None, embed_url: Optional[str] = None, media_type: Optional[str] = None):
        super().__init__(id = id, alternate_names = alternate_names, description = description, identifiers = identifiers, images = images, name = name, url = url, about = about, abstract = abstract, authors = authors, contributors = contributors, editors = editors, maintainers = maintainers, comments = comments, date_created = date_created, date_received = date_received, date_accepted = date_accepted, date_modified = date_modified, date_published = date_published, funders = funders, funded_by = funded_by, genre = genre, keywords = keywords, is_part_of = is_part_of, licenses = licenses, parts = parts, publisher = publisher, references = references, text = text, title = title, version = version)
        self.bitrate = bitrate
        self.content_size = content_size
        self.content_url = content_url
        self.embed_url = embed_url
        self.media_type = media_type