import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { ManagerComponent } from './components/manager/manager.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { LoginComponent } from './components/login/login.component';
import { SecretaryComponent } from './components/secretary/secretary.component';

;


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   /*  StudentComponent, */
    ManagerComponent,
    TeacherComponent,
    LoginComponent,
    SecretaryComponent,
    
    
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
