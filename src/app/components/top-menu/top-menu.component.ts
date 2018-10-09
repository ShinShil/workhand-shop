import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { AuthenticationService } from '../../services/authentication.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  links: BehaviorSubject<IMenuItem[]>;

  constructor(
    private menuService: MenuService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.links = this.menuService.topMenu;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/authenticate']);
  }

  get isAuthenticated(): boolean {
    return this.authenticationService.isAuthenticated;
  }

}
