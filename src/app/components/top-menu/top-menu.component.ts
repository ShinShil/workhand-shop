import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  links: IMenuItem[] = [];

  constructor(private menuService: MenuService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.links = this.menuService.getTopMenu();
  }

  logout() {
    this.authenticationService.logout();
  }

  get isAuthenticated(): boolean {
    return this.authenticationService.isAuthenticated;
  }

}
