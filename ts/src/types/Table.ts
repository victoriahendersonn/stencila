// Generated file; do not edit. See https://github.com/stencila/stencila/tree/main/rust/schema-gen

import { Author } from "./Author.js";
import { Block } from "./Block.js";
import { CreativeWork } from "./CreativeWork.js";
import { TableRow } from "./TableRow.js";

/**
 * A table.
 */
export class Table extends CreativeWork {
  // @ts-expect-error 'not assignable to the same property in base type'
  type: "Table";

  /**
   * The authors of the table.
   */
  declare authors?: Author[];

  /**
   * A short label for the table.
   */
  label?: string;

  /**
   * A caption for the table.
   */
  caption?: Block[];

  /**
   * Rows of cells in the table.
   */
  rows: TableRow[];

  /**
   * Notes for the table.
   */
  notes?: Block[];

  constructor(rows: TableRow[], options?: Partial<Table>) {
    super();
    this.type = "Table";
    if (options) Object.assign(this, options);
    this.rows = rows;
  }
}

/**
* Create a new `Table`
*/
export function table(rows: TableRow[], options?: Partial<Table>): Table {
  return new Table(rows, options);
}
