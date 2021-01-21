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
import { PlacesComponent } from './components/moreComponents/places/places.component';
import { EnterSpecializationComponent } from './components/moreComponents/enter-specialization/enter-specialization.component';
import { EnterSubjectsComponent } from './components/moreComponents/enter-subjects/enter-subjects.component';
import { UpdateScheduleComponent } from './components/moreComponents/update-schedule/update-schedule.component';
import { EnterFilesComponent } from './components/moreComponents/enter-files/enter-files.component';
import { ViewLessonComponent } from './components/moreComponents/view-lesson/view-lesson.component';

@NgModule({
  declarations: [
    AppComponent
    ,HomeComponent,
  LoginComponent,
    ManagerComponent,
    SecretaryComponent,
    //StudentComponent,
    TeacherComponent,
    EnterNewUserComponent,
    PlacesComponent,
    EnterSpecializationComponent,
    EnterSubjectsComponent,
    UpdateScheduleComponent,
    EnterFilesComponent,
    ViewLessonComponent
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
