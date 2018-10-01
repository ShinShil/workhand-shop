import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ServerService {
    constructor(private httpClient: HttpClient) {

    }

    get<T>(url: string, id?: number): Observable<T> {
        return id == null
        ? this.httpClient.get<T>(url)
        : this.httpClient.get<T>(`${url}/${id}`);
    }

}