import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  menuItems: IMenuItem[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuItems = this.menuService.getUserMenu();
  }

}
