// Generated file; do not edit. See `../rust/schema-gen` crate.

import { Block } from "./Block.js";
import { Comment } from "./Comment.js";
import { CreativeWorkType } from "./CreativeWorkType.js";
import { CreativeWorkTypeOrString } from "./CreativeWorkTypeOrString.js";
import { Date } from "./Date.js";
import { GrantOrMonetaryGrant } from "./GrantOrMonetaryGrant.js";
import { Inline } from "./Inline.js";
import { Person } from "./Person.js";
import { PersonOrOrganization } from "./PersonOrOrganization.js";
import { PersonOrOrganizationOrSoftwareApplication } from "./PersonOrOrganizationOrSoftwareApplication.js";
import { StringOrNumber } from "./StringOrNumber.js";
import { Thing } from "./Thing.js";
import { ThingType } from "./ThingType.js";

/**
 * A creative work, including books, movies, photographs, software programs, etc.
 */
export class CreativeWork extends Thing {
  type = "CreativeWork";

  /**
   * The subject matter of the content.
   */
  about?: ThingType[];

  /**
   * The authors of the `CreativeWork`.
   */
  authors?: PersonOrOrganization[];

  /**
   * A secondary contributor to the `CreativeWork`.
   */
  contributors?: PersonOrOrganizationOrSoftwareApplication[];

  /**
   * People who edited the `CreativeWork`.
   */
  editors?: Person[];

  /**
   * The maintainers of the `CreativeWork`.
   */
  maintainers?: PersonOrOrganization[];

  /**
   * Comments about this creative work.
   */
  comments?: Comment[];

  /**
   * The structured content of this creative work c.f. property `text`.
   */
  content?: Block[];

  /**
   * Date/time of creation.
   */
  dateCreated?: Date;

  /**
   * Date/time that work was received.
   */
  dateReceived?: Date;

  /**
   * Date/time of acceptance.
   */
  dateAccepted?: Date;

  /**
   * Date/time of most recent modification.
   */
  dateModified?: Date;

  /**
   * Date of first publication.
   */
  datePublished?: Date;

  /**
   * People or organizations that funded the `CreativeWork`.
   */
  funders?: PersonOrOrganization[];

  /**
   * Grants that funded the `CreativeWork`; reverse of `fundedItems`.
   */
  fundedBy?: GrantOrMonetaryGrant[];

  /**
   * Genre of the creative work, broadcast channel or group.
   */
  genre?: string[];

  /**
   * Keywords or tags used to describe this content.
   * Multiple entries in a keywords list are typically delimited by commas.
   */
  keywords?: string[];

  /**
   * An item or other CreativeWork that this CreativeWork is a part of.
   */
  isPartOf?: CreativeWorkType;

  /**
   * License documents that applies to this content, typically indicated by URL.
   */
  licenses?: CreativeWorkTypeOrString[];

  /**
   * Elements of the collection which can be a variety of different elements,
   * such as Articles, Datatables, Tables and more.
   */
  parts?: CreativeWorkType[];

  /**
   * A publisher of the CreativeWork.
   */
  publisher?: PersonOrOrganization;

  /**
   * References to other creative works, such as another publication,
   * web page, scholarly article, etc.
   */
  references?: CreativeWorkTypeOrString[];

  /**
   * The textual content of this creative work.
   */
  text?: string;

  /**
   * The title of the creative work.
   */
  title?: Inline[];

  /**
   * The version of the creative work.
   */
  version?: StringOrNumber;

  constructor(options?: Partial<CreativeWork>) {
    super();
    if (options) Object.assign(this, options);
    
  }

  /**
  * Create a `CreativeWork` from an object
  */
  static from(other: CreativeWork): CreativeWork {
    return new CreativeWork(other);
  }
}

/**
* Create a new `CreativeWork`
*/
export function creativeWork(options?: Partial<CreativeWork>): CreativeWork {
  return new CreativeWork(options);
}
