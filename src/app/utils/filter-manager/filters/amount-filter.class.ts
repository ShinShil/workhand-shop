import { FilterTypes } from "../../../constants";

export class AmountFilter implements IAmountFilter {
    value: number = null;
    equal = false;
    greater = false;
    lower = false;

    get type(): string {
        return FilterTypes.AMOUNT;
    }

    filterValue(value: any): boolean {
        return this.value == null
            || (this.equal && this.value == value)
            || (this.greater && value > this.value)
            || (this.lower && value < this.value);
    }
}
