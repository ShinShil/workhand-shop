import { Component, OnInit, Input, Output } from '@angular/core';

type FilterType = 'string' | 'amount';
@Component({
  selector: 'app-good-filter',
  templateUrl: './good-filter.component.html',
  styleUrls: ['./good-filter.component.scss']
})
export class GoodFilterComponent implements OnInit {
  @Input() filterConfig: { [key: string]: any };
  @Input() filter: { [key: string]: any };
  @Output() filterChange: { [key: string]: any };

  constructor() { }

  ngOnInit() {
  }

  get appliedFilters(): string[] {
    return Object.keys(this.filter)
  }

  addFilter(filterKey: string) {

  }

  removeFilter(filterKey: string) {

  }
}
