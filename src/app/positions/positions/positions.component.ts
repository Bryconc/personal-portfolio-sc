import { Component, OnInit } from '@angular/core';
import { positions } from 'src/data/positions/positions';
import { Position } from '../shared/position.interface';
import { SortOrder } from 'src/app/shared/sort/sort.component';
import { TableDataSource } from 'src/app/shared/sortable-table/table-data-source';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit, TableDataSource<Position> {
  public data: Position[] = positions;
  public fields = [
    {
      name: 'position',
      display: 'POSITION'
    },
    {
      name: 'company',
      display: 'COMPANY'
    },
    {
      name: 'dates',
      display: 'DATES'
    }
  ];

  constructor() {}

  ngOnInit() {}

  public getDataValue(data: Position, field: string): string {
    switch (field) {
      case 'dates':
        return this.getDateRange(data);
      case 'position':
      case 'company':
      default:
        return data[field];
    }
  }

  public compare(a: Position, b: Position, field: string): number {
    switch (field) {
      case 'dates':
        return a.beginDate.getTime() - b.beginDate.getTime();
      case 'position':
      case 'company':
      default:
        return a[field].localeCompare(b[field]);
    }
  }

  private getDateRange(position: Position): string {
    let str = '';
    if (position) {
      str = `${this.getDateStr(position.beginDate)} - ${this.getDateStr(
        position.endDate
      )}`;
    }
    return str;
  }

  private getDateStr(date: Date): string {
    let str = 'Present';
    if (date) {
      str = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    }

    return str;
  }
}
