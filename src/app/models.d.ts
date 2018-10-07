interface IGood {
    id: number;
    name: string;
    cost: number;
    shortDescription: string;
    previewImageUrl?: string;
}

interface IMenuItem {
    title: string;
    href: string;
}

interface IFilter {
    readonly type: string;
    filterValue(value: any): boolean;
}

interface IFilterConfiguration<TFilter> {
    getValueFromObject(object: any): any;
    filter: TFilter;
}

interface IFilterUI<TFilter> extends IFilterConfiguration<TFilter> {
    label: string;
}

interface IFilterWorker {
    getFilteredData<T>(items: T[], filterManager: IFilterManager<any>);
    isObjectPassAllFilters<T>(item: T, filterManager: IFilterManager<any>);
}

interface IFilterManager<TFilterKey> {
    readonly filterConfiguration: { [key: string]: IFilterConfiguration<IFilter> };
    readonly filterKeys: TFilterKey[];
    addFilter(filter: IFilter, filterKey: TFilterKey, getValue?: (object: any) => any);
    removeFilter(filterKey: TFilterKey);
}

interface IStringFilter extends IFilter {
    value: string;
    startsWith: boolean;
    contains: boolean;
    endsWith: boolean;
    ignoreCase: boolean;
}

interface IAmountFilter extends IFilter {
    value: number;
    greater: boolean;
    lower: boolean;
    equal: boolean;
}

type IGoodsFilterConfiguration = {
    name: IFilterUI<IStringFilter>;
    cost: IFilterUI<IAmountFilter>;
}