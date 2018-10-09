import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Urls } from '../constants';
import { ServerService } from './server.service';

@Injectable()
export class AuthenticationService {
    private user: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);

    get userInfo(): BehaviorSubject<IUser> {
        return this.user;
    }

    constructor(private serverService: ServerService) { }

    login(): BehaviorSubject<IUser> {
        this.serverService.get<IUser>(Urls.USERS, 1)
            .subscribe(user => this.user.next(user));
        return this.userInfo;
    }

    logout(): void {
        this.user.next(null);
    }

    get isAuthenticated(): boolean {
        return !!this.user.value;
    }
}
