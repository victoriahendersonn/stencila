// Generated file; do not edit. See `../rust/schema-gen` crate.

import { Block } from './Block';
import { Comment } from './Comment';
import { CreativeWorkType } from './CreativeWorkType';
import { CreativeWorkTypeOrString } from './CreativeWorkTypeOrString';
import { Date } from './Date';
import { FileOrDirectory } from './FileOrDirectory';
import { GrantOrMonetaryGrant } from './GrantOrMonetaryGrant';
import { ImageObjectOrString } from './ImageObjectOrString';
import { Inline } from './Inline';
import { Person } from './Person';
import { PersonOrOrganization } from './PersonOrOrganization';
import { PropertyValueOrString } from './PropertyValueOrString';
import { StringOrNumber } from './StringOrNumber';
import { ThingType } from './ThingType';

// A directory on the filesystem
export class Directory {
  type = "Directory";

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
  name: string;

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

  // The files and other directories that are within this directory
  parts: FileOrDirectory[];

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

  // The path (absolute or relative) of the file on the filesystem
  path: string;

  constructor(name: string, parts: FileOrDirectory[], path: string, options?: Directory) {
    if (options) Object.assign(this, options)
    this.name = name;
    this.parts = parts;
    this.path = path;
  }
}