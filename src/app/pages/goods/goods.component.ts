import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { Observable } from 'rxjs';
import { Urls } from '../../constants';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  goods: Observable<IGood[]>;
  filter: { [key: string]: any };

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.goods = this.serverService.get(Urls.GOODS);
  }

}
