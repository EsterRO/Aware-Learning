import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { catchError, retry } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  login:string
  options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
   
  url="http://localhost:4200"
  constructor(private http: HttpClient) {
    this.login='' 
  }
  Login(Id:string):Observable<boolean>{
    let data={'Id':Id}
    return this.http.get<boolean>(`${this.url}/api/Login`, {params:data})
  }
  SelectRoleById(Id:string):Observable<number>{
    let data={'Id':Id}
    return this.http.get<number>(`${this.url}/api/Login`,{params:data})
  }
  CreateNewUser(user:User):Observable<boolean>{
    return this.http.post<boolean>(`${this.url}/api/user`,user,this.options)
  }
}
