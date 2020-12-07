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

const routes: Routes = [
 {path:'home',component:HomeComponent} ,
 {path:'login',component:LoginComponent},
 {path:'teacher',component:TeacherComponent},
 {path:'student',component:StudentComponent} ,
 {path:'manager',component:ManagerComponent} ,
 {path:'secretary',component:SecretaryComponent} ,
 {path:'moreComponents/enter-new-user',component:EnterNewUserComponent},
 {path:'moreComponents/update-schedule',component:UpdateScheduleComponent},
 {path:'',redirectTo:'/home',pathMatch:'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
