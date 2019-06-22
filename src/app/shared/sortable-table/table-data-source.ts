import { FieldData } from './sortable-table.component';

export interface TableDataSource<E> {
  data: E[];
  fields: FieldData[];
  getDataValue(data: E, field: string): string;
  compare(a: any, b: any, field: string): number;
}
