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
    const costStart = new AmountFilter();
    costStart.greater = true;
    const costEnd = new AmountFilter();
    costEnd.lower = true;
    return {
      costEnd: {
        filter: costEnd,
        getValueFromObject: (good: IGood) => good.cost,
        resources: {
          label: 'Cost End'
        }
      },
      costStart: {
        filter: costStart,
        getValueFromObject: (good: IGood) => good.cost,
        resources: {
          label: 'Cost Start'
        }
      },
      name: {
        filter: new StringFilter(),
        getValueFromObject: (good: IGood) => good.name,
        resources: {
          label: 'Name'
        }
      }
    }
  }

}
