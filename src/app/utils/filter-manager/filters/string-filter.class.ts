import { FilterTypes } from "../../../constants";

export class StringFilter implements IStringFilter {
    value: string;
    startsWith: boolean;
    contains: boolean;
    endsWith: boolean;
    ignoreCase: boolean;

    constructor() {

    }

    get type() {
        return FilterTypes.STRING;
    }

    filterValue(value: string): boolean {
        return this.value == null
        || value.toLowerCase().indexOf(this.value.toLowerCase()) > -1;
    }
}
