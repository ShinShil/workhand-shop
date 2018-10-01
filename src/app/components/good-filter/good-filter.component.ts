import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-good-filter',
  templateUrl: './good-filter.component.html',
  styleUrls: ['./good-filter.component.scss']
})
export class GoodFilterComponent implements OnInit {
  @Input() filter: { [key: string]: any };
  @Output() filterChange: { [key: string]: any };

  constructor() { }

  ngOnInit() {
  }

  get appliedFilters():  string[] {
    return Object.keys(this.filter)
  }

  addFilter(filterKey: string) {

  }

  removeFilter(filterKey: string) {

  }
}
