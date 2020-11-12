import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup

  /* Id:string */
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      UserName: new FormControl('', Validators.required),
      Id: new FormControl('', Validators.required)
    });
  }
  enter(UN,Id) {
    // if(role==111)
    // this.router.navigate(['/student']);
    // if(role==222)
    // this.router.navigate(['/student']);
    // if(rolee==333)
    // this.router.navigate(['/student']);
  }
}
