import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  menuItems: BehaviorSubject<IMenuItem[]>;

  constructor(private menuService: MenuService) {
    this.menuItems = this.menuService.userMenu;
  }

  ngOnInit() {

  }

}
