// Generated file; do not edit. See `../rust/schema-gen` crate.

import { BlocksOrInlines } from './BlocksOrInlines';
import { Integer } from './Integer';
import { TableCellType } from './TableCellType';

// A cell within a `Table`.
export class TableCell {
  type = "TableCell";

  // The identifier for this item
  id?: string;

  // The type of cell.
  cellType?: TableCellType;

  // The name of the cell.
  name?: string;

  // How many columns the cell extends.
  columnSpan?: Integer;

  // How many columns the cell extends.
  rowSpan?: Integer;

  // Contents of the table cell.
  content?: BlocksOrInlines;

  constructor(options?: TableCell) {
    if (options) Object.assign(this, options)
    
  }
}
