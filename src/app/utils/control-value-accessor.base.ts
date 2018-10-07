import { ControlValueAccessor } from "@angular/forms";

export abstract class ControlValueAccessorBase<TValue> implements ControlValueAccessor {
    private innerValue: TValue;
    private onChangeEvents: ((value: TValue) => void)[] = [];
    private onTouchEvents: (() => void)[] = [];

    get value(): TValue {
        return this.innerValue;
    }

    set value(value: TValue) {
        this.innerValue = value;
        this.callOnChange(value);
    }

    writeValue(value: any): void {
        this.innerValue = value;
    }
    registerOnChange(fn: any): void {
        this.onChangeEvents.push(fn);
    }
    registerOnTouched(fn: any): void {
        this.onTouchEvents.push(fn);
    }
    setDisabledState?(isDisabled: boolean): void {
        throw new Error("Method not implemented.");
    }

    callOnTouch(): void {
        this.onTouchEvents.forEach(touch => touch());
    }

    callOnChange(value: TValue): void {
        this.onChangeEvents.forEach(change => change(value));
    }
}