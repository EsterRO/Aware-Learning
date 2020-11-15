import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup

  /* Id:string */
  constructor(private router: Router,private Userservise:UsersService) {

  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      FUserName: new FormControl('', Validators.required),
      LUserName: new FormControl('', Validators.required),
      Id: new FormControl('', Validators.required),
      UserAdress: new FormControl('', Validators.required),
      UserSpecialization: new FormControl('', Validators.required),
      UserRole:new FormControl('',Validators.required)
    });
  }
  enter() {

   // this.router.navigate(['/teacher, {Id}']);
    
  }
}