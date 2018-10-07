import { Component, EventEmitter, Output } from '@angular/core';

import { GoodFilterService } from '../../services/good-filter.service';
import { clone } from 'lodash';
import { FilterTypes } from '../../constants';

@Component({
  selector: 'app-good-filter',
  templateUrl: './good-filter.component.html',
  styleUrls: ['./good-filter.component.scss']
})
export class GoodFilterComponent {
  @Output() filterChange = new EventEmitter<string>();
  filterTypes = clone(FilterTypes);

  get filter(): IGoodsFilterConfiguration {
    return this.goodsFilterService.filterManager.filterConfiguration as IGoodsFilterConfiguration;
  }

  constructor(private goodsFilterService: GoodFilterService) { }

  updateFilter(key: string) {
    this.filterChange.emit(key);
  }

}
