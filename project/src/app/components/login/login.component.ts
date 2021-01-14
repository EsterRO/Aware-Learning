import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Times } from 'src/app/models/Times';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup

  /* Id:string */
  constructor(private router: Router, private Userservise: UsersService) {

  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({

      Id: new FormControl('', Validators.required),

    });
  }
  enter() {

    this.formLogin.controls['Id'].setValidators([Validators.required])
    this.formLogin.controls['Id'].updateValueAndValidity()

    // this.router.navigate(['/teacher, {Id}']);
    this.Userservise.Login(this.formLogin.controls['Id'].value).subscribe((data) => {
      if (data=='1') {
        this.router.navigate(['/teacher'])
      }
      if (data=='2') {
        this.router.navigate(['/student'])
      }
      if (data=='3') {
        this.router.navigate(['/manager'])
      }
      if (data=='4') {
        this.router.navigate(['/secretary'])
      }
        // let newTime=new Times()
        // newTime.userId=this.formLogin.controls['Id'].value
        // newTime.fromTime=new Date()
        
        // this.Userservise.UpdateEnterTimeUser(newTime).subscribe((data)=>{
        //   console.log(data)
        // })
        // this.Userservise.login = this.formLogin.controls.Id.value
        // console.log('login: ' + this.Userservise.login)
      //   this.Userservise.SelectRoleById(this.formLogin.controls['Id'].value).subscribe((numRole)=>{
      //     console.log(numRole)
      //     if(numRole==1)
      //     this.router.navigate(['/teacher'])
      //     if(numRole==2)
      //     this.router.navigate(['/student'])
      //     if(numRole==3)
      //     this.router.navigate(['/manager'])
      //     if(numRole==4)
      //     this.router.navigate(['/secretary'])
      //   })
      // }
      // else {
      //   alert('מספר זהות שגוי')
       }
      // alert("fhgf");

    // }
    )
    /* if (this.formLogin.valid) {
      let user = new User()
      user.Firstname = this.formLogin.controls['FUserName'].value;
      user.LastName = this.formLogin.controls['LUserName'].value;
      user.Id = this.formLogin.controls['Id'].value;
      user.address = this.formLogin.controls['UserAdress'].value;
      user.Role = this.formLogin.controls['UserRole'].value;
      user.Specialization = this.formLogin.controls['UserSpecialization'].value;
      if (user.Role = 1)
        this.router.navigate(['/teacher, {user.Id}']);
      if (user.Role = 2)
        this.router.navigate(['/student, {user.Id}']);
      if (user.Role = 3)
        this.router.navigate(['/manager, {user.Id}']);
      if (user.Role = 4)
      this.router.navigate(['/secretary, {user.Id}']);
    
    }
 */
  }
}