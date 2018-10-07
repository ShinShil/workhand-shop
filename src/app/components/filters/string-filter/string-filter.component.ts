import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessorBase } from 'src/app/utils/control-value-accessor.base';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-string-filter',
  templateUrl: './string-filter.component.html',
  styleUrls: ['./string-filter.component.scss'],
  providers: [ {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StringFilterComponent),
      multi: true
    }]
})
export class StringFilterComponent extends ControlValueAccessorBase<IStringFilter> {
  @Input() resources: IFilterResourcesLabel;
}
