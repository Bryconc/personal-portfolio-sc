import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Position } from '../shared/position.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PositionComponent implements OnInit {
  public position: Position;

  constructor(private route: ActivatedRoute, private date: DatePipe) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.loadPosition(id);
    });
  }

  ngOnInit() {}

  public getDate(date: Date): string {
    if (date === null) {
      return 'Present';
    }

    return this.date.transform(date, 'MMMM yyyy');
  }

  private loadPosition(positionID: string): void {
    const { position } = require(`src/data/positions/position/${positionID}`);
    this.position = position;
  }
}
