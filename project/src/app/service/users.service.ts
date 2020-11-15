import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  login:string
  options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
   
  url="http://localhost:5000"
  constructor(private http: HttpClient) {
    this.login='' 
  }
  createNewCall(call:string):Observable<string>{
    return this.http.post<string>(`${this.url}/api/createNewCall`, call, this.options)
  }
}
