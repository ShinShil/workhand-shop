import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  links: IMenuItem[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.links = this.menuService.getTopMenu();
  }

}
