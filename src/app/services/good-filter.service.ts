import { Injectable } from '@angular/core';
import { Observable, of as ObservableOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodFilterService {

  constructor() { }

  get defaultFilters(): Observable<{ [key: string]: string } {
    return ObservableOf({
      name: null,
      cost: null
    });
  }

}
