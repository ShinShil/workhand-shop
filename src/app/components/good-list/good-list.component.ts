import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.scss']
})
export class GoodListComponent implements OnInit {
  @Input() goods: IGood[];

  constructor() { }

  ngOnInit() {
  }

}
