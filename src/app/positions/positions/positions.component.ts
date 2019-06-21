import { Component, OnInit } from '@angular/core';
import { positions } from 'src/data/positions/positions';
import { Position } from '../shared/position.interface';
import { SortOrder } from 'src/app/shared/sort/sort.component';

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
export class PositionsComponent implements OnInit {
  public positions: Position[] = positions;

  constructor() {}

  ngOnInit() {}

  public getDateRange(position: Position): string {
    let str = '';
    if (position) {
      str = `${this.getDateStr(position.beginDate)} - ${this.getDateStr(
        position.endDate
      )}`;
    }
    return str;
  }

  public sortPositions(order: SortOrder, index: string) {
    positions.sort((a: Position, b: Position) => {
      return this.comparePosition(a, b, index, order);
    });
  }

  private comparePosition(
    a: Position,
    b: Position,
    index: string,
    order: SortOrder
  ): number {
    const multiplier = order === SortOrder.ASC ? 1 : -1;
    switch (index) {
      case 'beginDate':
        return multiplier * (a[index].getTime() - b[index].getTime());
      case 'position':
      case 'company':
      default:
        return multiplier * a[index].localeCompare(b[index]);
    }
  }

  private getDateStr(date: Date): string {
    let str = 'Present';
    if (date) {
      str = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    }

    return str;
  }
}
