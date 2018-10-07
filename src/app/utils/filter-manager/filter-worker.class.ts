import { values } from "lodash";

export class FilterWorker implements IFilterWorker {
    getFilteredData<T>(items: T[], filterManager: IFilterManager<any>): T[] {
        return items.filter(item => this.isObjectPassAllFilters(item, filterManager));
    }

    isObjectPassAllFilters<T>(item: T, filterManager: IFilterManager<any>): boolean {
        const filters = values(filterManager.filterConfiguration);
        let pass = true;
        for (let filter of filters) {
            pass = filter.filter.filterValue(filter.getValueFromObject(item));
            if (!pass) {
                break;
            }
        }
        return pass;
    }

    getFilteredDataBySingleFilter<T>(items: T[], filterConfiguration: IFilterConfiguration<IFilter>) {
        const filterFunc = filterConfiguration.filter.filterValue;
        const getValue = filterConfiguration.getValueFromObject;
        return items.filter(item => filterFunc(getValue(item)));
    }
}
