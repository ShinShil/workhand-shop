import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ControlValueAccessorBase } from '../../../utils/control-value-accessor.base';

@Component({
  selector: 'app-amount-filter',
  templateUrl: './amount-filter.component.html',
  styleUrls: ['./amount-filter.component.scss'],
  providers: [ {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AmountFilterComponent),
      multi: true
    }]
})
export class AmountFilterComponent extends ControlValueAccessorBase<IAmountFilter> {
  @Input() resources: IFilterResourcesLabel;
}
