import { Injectable } from '@angular/core';
import { FilterManager } from '../utils/filter-manager/filter-manager.class';
import { StringFilter } from '../utils/filter-manager/filters/string-filter.class';
import { AmountFilter } from '../utils/filter-manager/filters/amount-filter.class';
import { FilterWorker } from '../utils/filter-manager/filter-worker.class';

@Injectable({
  providedIn: 'root'
})
export class GoodFilterService {
  filterManager: IFilterManager<string>;
  filterWorker: IFilterWorker;

  constructor() {
    this.filterManager = new FilterManager(this.goodsFilterConfiguration);
    this.filterWorker = new FilterWorker();
  }

  filter(goods: IGood[]) {
    return this.filterWorker.getFilteredData(goods, this.filterManager);
  }

  private get goodsFilterConfiguration(): IGoodsFilterConfiguration {
    return {
      name: {
        filter: new StringFilter(),
        getValueFromObject: (good: IGood) => good.name,
        label: 'Name'
      },
      cost: {
        filter: new AmountFilter(),
        getValueFromObject: (good: IGood) => good.cost,
        label: 'Cost'
      }
    }
  }

}
