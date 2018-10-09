import { AuthenticationService } from "./authentication.service";
import { Injectable } from "@angular/core";

@Injectable()
export class MenuService {
    constructor(private authenticationService: AuthenticationService) {

    }

    getTopMenu(): IMenuItem[] {
        return [
            this.getLink('Home', '/home'),
            this.getLink('Goods', '/goods'),
        ];
    }

    getUserMenu(): IMenuItem[] {
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