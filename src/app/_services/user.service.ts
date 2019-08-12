import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs';

//import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    private _serviceBaseUrl:string = "localhost:4200"
    getAll() {
        return this.http.get<User[]>(`${this._serviceBaseUrl}/users`);
     
    }

    getById(id: number) {
        return this.http.get<User>(`${this._serviceBaseUrl}/users/${id}`);
      
    }
    InsertRegistration(user:User):Observable<User>{
        debugger;
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.post<User>(this._serviceBaseUrl+'',user,httpOptions)
    }
    
}