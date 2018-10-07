import { keys } from 'lodash';

export class FilterManager implements IFilterManager<string> {
    get filterKeys(): string[] {
        return keys(this.filterConfiguration);
    }

    constructor(
        public readonly filterConfiguration: { [key: string]: IFilterConfiguration<IFilter> }
    ) {
        this.filterConfiguration = filterConfiguration || {};
    }

    addFilter(filter: IFilter, filterKey: string, getValue?: (object: any) => any) {
        const getValueFromObject = getValue || ((value: any) => value);
        this.filterConfiguration[filterKey] = {
            filter,
            getValueFromObject
        }
    }

    removeFilter(filterKey: string) {
        delete this.filterConfiguration[filterKey];
    }
}
