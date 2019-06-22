import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  public sortOrder = SortOrder;

  @Input()
  public active: boolean;

  @Input()
  public activeOrder: SortOrder;

  constructor() {}

  ngOnInit() {}
}

export enum SortOrder {
  ASC,
  DESC
}
