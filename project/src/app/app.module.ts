import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ManagerComponent } from './components/manager/manager.component';
import { SecretaryComponent } from './components/secretary/secretary.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import{HttpClient}from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http';
import { EnterNewUserComponent } from './components/moreComponents/enter-new-user/enter-new-user.component';

@NgModule({
  declarations: [
    AppComponent
    ,HomeComponent,
  LoginComponent,
    ManagerComponent,
    SecretaryComponent,
    StudentComponent,
    TeacherComponent,
    EnterNewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    //HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
