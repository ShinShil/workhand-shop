import { FilterTypes } from "../../../constants";

export class StringFilter implements IStringFilter {
    value: string;

    constructor() {

    }

    get type() {
        return FilterTypes.STRING;
    }

    filterValue(value: string): boolean {
        return value.toLowerCase().indexOf(this.value.toLowerCase()) > -1;
    }
}
