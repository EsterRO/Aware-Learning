import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {
  options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }



  getAllRoles() {
    return this.http.get('localhost:3000/api/createNewCall')

  }
  
}


/* @Injectable({
  providedIn: 'root'
})
export class VolunteeringserviceService {



  url = "http://localhost:3000"
  constructor(private http: HttpClient) {
  }

  // getRequests(): Observable<AskForHelp[]> {
  //   return this.http.get<AskForHelp[]>(`${this.url}`)
  // }

  // postSignIn(userName: string, password: string) {
  //   return this.http.post<User>(`${this.url}`, { userName, password })
  // }
  // getPassword(password: string){
  //   return this.http.get<string>(`${this.url}/api/checkPassword`, {params: {pass: password}})
  // }

  postSignUp(userName: string, password: string, phone: string, city: string, restriction: string): Observable<string> {
    return this.http.post<string>(`${this.url}/api/signUp`, { userName, password, phone, city, restriction }, this.options)
  }
}
 */