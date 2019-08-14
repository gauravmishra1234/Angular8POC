import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    private _serviceBaseUrl:string = "http://localhost:4000"
    getAll() {
         return this.http.get<any>(`${this._serviceBaseUrl}/users`);     
    }
    getById(id: number) {
        return this.http.get<User>(`${this._serviceBaseUrl}/users/${id}`);
    }

    InsertRegistration(user:User){
     return this.http.post<any>(this._serviceBaseUrl+"/users/insertUserDetails", user)
     .pipe(map(user=>{
        JSON.stringify(user)
        return user;
     }));
    }
}