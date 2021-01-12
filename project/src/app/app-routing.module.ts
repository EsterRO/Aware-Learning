import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ManagerComponent } from './components/manager/manager.component';
import { SecretaryComponent } from './components/secretary/secretary.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { Times } from './models/Times';
import{EnterNewUserComponent} from './components/moreComponents/enter-new-user/enter-new-user.component';
import { UpdateScheduleComponent } from './components/moreComponents/update-schedule/update-schedule.component';
import{ EnterSpecializationComponent}from './components/moreComponents/enter-specialization/enter-specialization.component'
import{EnterSubjectsComponent}from'./components/moreComponents/enter-subjects/enter-subjects.component'
import{PlacesComponent}from'./components/moreComponents/places/places.component'
import{EnterFilesComponent}from './components/moreComponents/enter-files/enter-files.component'

const routes: Routes = [
 {path:'home',component:HomeComponent} ,
 {path:'login',component:LoginComponent},
 {path:'teacher',component:TeacherComponent},
 {path:'student',component:StudentComponent} ,
 {path:'manager',component:ManagerComponent} ,
 {path:'secretary',component:SecretaryComponent} ,
 {path:'moreComponents/enter-new-user',component:EnterNewUserComponent},
 {path:'moreComponents/update-schedule',component:UpdateScheduleComponent},
{path:'moreComponents/enter-specialization',component:EnterSpecializationComponent},
{path:'moreComponents/enter-subjects',component:EnterSubjectsComponent},
{path:'moreComponents/places',component:PlacesComponent},
{path:'moreComponents/enter-files',component:EnterFilesComponent},
 {path:'',redirectTo:'/home',pathMatch:'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
