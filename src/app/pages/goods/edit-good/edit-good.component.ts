import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../../services/server.service';
import { Urls } from '../../../constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-good',
  templateUrl: './edit-good.component.html',
  styleUrls: ['./edit-good.component.scss']
})
export class EditGoodComponent implements OnInit {
  private good: IGood;

  constructor(
    private serverService: ServerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const id = 1;
      if (id != null) {
        this.serverService.get<IGood>(Urls.GOODS, id)
          .subscribe(good => this.good = good);
      } else {
        this.good = this.getEmptyGood();
      }
    });
  }

  getEmptyGood(): IGood {
    return {
      cost: null,
      id: 0,
      name: null,
      previewImageUrl: null,
      shortDescription: null,
      userId: 1
    }
  }

}
