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
  enter() {

    this.router.navigate(['/teacher, {Id}']);
    
  }
}