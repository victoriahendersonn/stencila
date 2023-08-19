// Generated file; do not edit. See `../rust/schema-gen` crate.

import { Block } from './Block';
import { Comment } from './Comment';
import { CreativeWorkType } from './CreativeWorkType';
import { CreativeWorkTypeOrString } from './CreativeWorkTypeOrString';
import { Date } from './Date';
import { GrantOrMonetaryGrant } from './GrantOrMonetaryGrant';
import { ImageObjectOrString } from './ImageObjectOrString';
import { Inline } from './Inline';
import { IntegerOrString } from './IntegerOrString';
import { Person } from './Person';
import { PersonOrOrganization } from './PersonOrOrganization';
import { PropertyValueOrString } from './PropertyValueOrString';
import { StringOrNumber } from './StringOrNumber';
import { ThingType } from './ThingType';

// A part of a successively published publication such as a periodical or publication
  // volume, often numbered.
export class PublicationIssue {
  type = "PublicationIssue";

  // The identifier for this item
  id?: string;

  // Alternate names (aliases) for the item.
  alternateNames?: string[];

  // A description of the item.
  description?: Block[];

  // Any kind of identifier for any kind of Thing.
  identifiers?: PropertyValueOrString[];

  // Images of the item.
  images?: ImageObjectOrString[];

  // The name of the item.
  name?: string;

  // The URL of the item.
  url?: string;

  // The subject matter of the content.
  about?: ThingType[];

  // The authors of this creative work.
  authors?: PersonOrOrganization[];

  // Comments about this creative work.
  comments?: Comment[];

  // The structured content of this creative work c.f. property `text`.
  content?: Block[];

  // Date/time of creation.
  dateCreated?: Date;

  // Date/time that work was received.
  dateReceived?: Date;

  // Date/time of acceptance.
  dateAccepted?: Date;

  // Date/time of most recent modification.
  dateModified?: Date;

  // Date of first publication.
  datePublished?: Date;

  // People who edited the `CreativeWork`.
  editors?: Person[];

  // People or organizations that funded the `CreativeWork`.
  funders?: PersonOrOrganization[];

  // Grants that funded the `CreativeWork`; reverse of `fundedItems`.
  fundedBy?: GrantOrMonetaryGrant[];

  // Genre of the creative work, broadcast channel or group.
  genre?: string[];

  // Keywords or tags used to describe this content.
  // Multiple entries in a keywords list are typically delimited by commas.
  keywords?: string[];

  // An item or other CreativeWork that this CreativeWork is a part of.
  isPartOf?: CreativeWorkType;

  // License documents that applies to this content, typically indicated by URL.
  licenses?: CreativeWorkTypeOrString[];

  // The people or organizations who maintain this CreativeWork.
  maintainers?: PersonOrOrganization[];

  // Elements of the collection which can be a variety of different elements,
  // such as Articles, Datatables, Tables and more.
  parts?: CreativeWorkType[];

  // A publisher of the CreativeWork.
  publisher?: PersonOrOrganization;

  // References to other creative works, such as another publication,
  // web page, scholarly article, etc.
  references?: CreativeWorkTypeOrString[];

  // The textual content of this creative work.
  text?: string;

  // The title of the creative work.
  title?: Inline[];

  // The version of the creative work.
  version?: StringOrNumber;

  // Identifies the issue of publication; for example, "iii" or "2".
  issueNumber?: IntegerOrString;

  // The page on which the issue starts; for example "135" or "xiii".
  pageStart?: IntegerOrString;

  // The page on which the issue ends; for example "138" or "xvi".
  pageEnd?: IntegerOrString;

  // Any description of pages that is not separated into pageStart and pageEnd;
  // for example, "1-6, 9, 55".
  pagination?: string;

  constructor(options?: PublicationIssue) {
    if (options) Object.assign(this, options)
    
  }
}