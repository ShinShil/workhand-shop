import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class MenuService {
    private topMenuSubject: BehaviorSubject<IMenuItem[]>
        = new BehaviorSubject<IMenuItem[]>(this.getTopAuthMenu());
    private userMenuSubject: BehaviorSubject<IMenuItem[]>
        = new BehaviorSubject<IMenuItem[]>(this.getUserMenu());

    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.userInfo
            .subscribe(() => {
                const newMenu = this.authenticationService.isAuthenticated
                    ? this.getTopAuthMenu()
                    : this.getTopNotAuthMenu();
                this.topMenuSubject.next(newMenu);
            });
    }

    get topMenu(): BehaviorSubject<IMenuItem[]> {
        return this.topMenuSubject;
    }

    get userMenu(): BehaviorSubject<IMenuItem[]> {
        return this.userMenuSubject;
    }

    private getTopAuthMenu(): IMenuItem[] {
        return [
            this.getLink('Home', '/home'),
            this.getLink('Goods', '/goods'),
            this.getLink('User', '/user')
        ];
    }

    private getTopNotAuthMenu(): IMenuItem[] {
        return [
            this.getLink('Home', '/home'),
            this.getLink('Goods', '/goods'),
            this.getLink('Sign In/Up', '/authenticate')
        ];
    }

    private getUserMenu(): IMenuItem[] {
        return [
            this.getLink('Account', '/user/account'),
            this.getLink('Messages', '/user/messages'),
            this.getLink('Manage goods', '/user/manage-goods')
        ];
    }

    getLink(title: string, href: string): IMenuItem {
        return { title, href };
    }
}