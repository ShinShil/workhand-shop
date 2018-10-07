import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { Observable } from 'rxjs';
import { Urls } from '../../constants';
import { GoodFilterService } from '../../services/good-filter.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  goods: IGood[] = [];
  filteredGoods: IGood[] = [];

  constructor(private serverService: ServerService,
    private goodsFilterService: GoodFilterService) { }

  ngOnInit() {
    this.serverService.get<IGood[]>(Urls.GOODS)
      .subscribe(goods => {
        this.goods = goods;
        this.filterGoods();
      });
  }

  filterGoods() {
    this.filteredGoods = this.goodsFilterService.filter(this.goods); 
  }

}
