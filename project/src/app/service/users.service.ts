import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { catchError, retry } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { Times } from '../models/Times';
import { Time } from '@angular/common';
import { Subjects } from '../models/Subject';
import { Schedule } from '../models/Schedule';
import { Files } from '../models/Files';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  login: string
  options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  url = "http://localhost:3000"
  constructor(private http: HttpClient) {
    this.login = ''
  }
  Login(Id: string): Observable<boolean> {
    let data = { 'Id': Id }
    return this.http.get<boolean>(`${this.url}/api/login`, { params: data })
  }
  SelectRoleById(Id: string): Observable<number> {
    let data = { 'Id': Id }
    return this.http.get<number>(`${this.url}/api/login`, { params: data })
  }
  CreateNewUser(user: User): Observable<boolean> {
    console.log('new user')
    return this.http.post<boolean>(`${this.url}/api/user`, user, this.options)
  }
  UpdateEnterTimeUser(newTimeE: Times): Observable<Date> {
    return this.http.post<Date>(`${this.url}/api/login`, newTimeE, this.options)
  }
  TrackingStudents(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/api/Student`)
  }
  /*   PlaceUser(numRoom: number, FTime: Date, TTime: Date): Observable <Array<Object>> {
      let data = {
        'nRStudent': numRoom,
        'FTime': FTime,
        'TTime': TTime
      }
      return this.http.get<Array<Object>>(`${this.url}/api/user`,{params:data})
    } */
  enterSpecialization(SpecName: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}/api/specialization`, SpecName, this.options)
  }
  enterSubject(newSub: Subjects): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}/api/subject`, newSub, this.options)
  }
  CreateNewSchedule(newSchedule:Schedule):Observable<boolean>{
    return this.http.post<boolean>(`${this.url}/api/schedule`,newSchedule,this.options)

  }
  AddNewFile(newFile:Files):Observable<boolean>{
    return this.http.post<boolean>(`${this.url}/api/file`,newFile,this.options)
  }
}
