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

    getLink(title: string, href: string): IMenuItem {
        return { title, href };
    }
}