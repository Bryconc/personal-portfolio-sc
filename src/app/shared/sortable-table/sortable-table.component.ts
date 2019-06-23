import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableDataSource } from './table-data-source';
import { SortOrder } from '../sort/sort.component';

@Component({
  selector: 'app-sortable-table',
  templateUrl: './sortable-table.component.html',
  styleUrls: ['./sortable-table.component.scss']
})
export class SortableTableComponent implements OnInit {
  @Input()
  public dataSource: TableDataSource<any>;

  @Output()
  public rowClick: EventEmitter<any>;

  public activeSort: string;

  public activeOrder: SortOrder;

  constructor() {
    this.rowClick = new EventEmitter();
  }

  ngOnInit() {}

  public sort(field: string) {
    this.setSortOrder(field);
    this.activeSort = field;
    this.dataSource.data.sort((a: any, b: any) => {
      const multiplier = this.activeOrder === SortOrder.ASC ? 1 : -1;
      return multiplier * this.dataSource.compare(a, b, field);
    });
  }

  public rowClicked(event: any): void {
    this.rowClick.emit(event);
  }

  private setSortOrder(field: string) {
    if (field !== this.activeSort) {
      this.activeOrder = SortOrder.ASC;
    } else {
      if (this.activeOrder === null) {
        this.activeOrder = SortOrder.ASC;
      } else {
        this.activeOrder =
          this.activeOrder === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC;
      }
    }
  }
}

export interface FieldData {
  name: string;
  display: string;
}
