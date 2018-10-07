import { HttpClient } from "@angular/common/http";
import { Urls } from "../constants";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationService {
    user: IUser;

    constructor(private httpClient: HttpClient) { }

    login(): void {
        this.httpClient.get<IGood[]>(Urls.GOODS)
            .subscribe(goods => {
                this.user = {
                    id: 1,
                    name: 'Admin'
                }
            });
    }

    logout(): void {
        this.user = null;
    }

    get isAuthenticated(): boolean {
        return !!this.user;
    }
}
