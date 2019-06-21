import { Component, OnInit } from '@angular/core';
import { positions } from 'src/data/positions/positions';
import { Position } from '../shared/position.interface';

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

  private getDateStr(date: Date): string {
    let str = 'Present';
    if (date) {
      str = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    }

    return str;
  }
}
