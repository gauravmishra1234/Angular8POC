import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) {
    }
    private _serviceBaseUrl: string = "http://localhost:4000"
    getAll(pageNum = 1) {
        return this.http.get<any>(`${this._serviceBaseUrl}/users/GetAll/${pageNum}`);
    }
    getById(id: number) {
        return this.http.get<User>(`${this._serviceBaseUrl}/users/${id}`);
    }

    InsertRegistration(user: User) {
        return this.http.post<any>(this._serviceBaseUrl + "/users/insertUserDetails", user)
            .pipe(map(user => {
                JSON.stringify(user)
                return user;
            }));
    }
    updateUser(user: User) {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.put<any>(this._serviceBaseUrl + "/users/updateUserDetails", user, httpOptions)
            .pipe(map(user => {
                JSON.stringify(user)
                return user;
                debugger;
            }));
    }
    deleteUserById(id: number) {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.delete<number>(this._serviceBaseUrl + '/users/deleteUserDetail?id=' + id, httpOptions);
    }
}