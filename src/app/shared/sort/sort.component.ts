import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  public sortOrder = SortOrder;

  @Output()
  public sorted: EventEmitter<SortOrder>;

  constructor() {
    this.sorted = new EventEmitter();
  }

  ngOnInit() {}

  public sort(order: SortOrder) {
    this.sorted.emit(order);
  }
}

export enum SortOrder {
  ASC,
  DESC
}
