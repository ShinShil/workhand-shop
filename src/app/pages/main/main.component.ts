import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { Observable } from 'rxjs/internal/Observable';
import { Urls } from '../../constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  goods: Observable<IGood> = null;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.goods = this.serverService.get(Urls.GOODS);
  }

}
