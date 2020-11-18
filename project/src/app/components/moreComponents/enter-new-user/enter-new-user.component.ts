import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-enter-new-user',
  templateUrl: './enter-new-user.component.html',
  styleUrls: ['./enter-new-user.component.css']
})
export class EnterNewUserComponent implements OnInit {
  newUserForm: FormGroup
  constructor(private router: Router, private Userservise: UsersService) { }

  ngOnInit(): void {
    this.newUserForm = new FormGroup({
      IdUser: new FormControl('', Validators.required),
      FNameUser: new FormControl('', Validators.required),
      LNameUser: new FormControl('', Validators.required),
      AdressUser: new FormControl('', Validators.required),
      SpecializationUser: new FormControl('', Validators.required),
      RoleUser: new FormControl('', Validators.required),
    })
  }
  send() {
    this.newUserForm.controls['IdUser'].setValidators([Validators.required])
    this.newUserForm.controls['IdUser'].updateValueAndValidity()
    this.newUserForm.controls['FNameUser'].setValidators([Validators.required])
    this.newUserForm.controls['FNameUser'].updateValueAndValidity()
    this.newUserForm.controls['LNameUser'].setValidators([Validators.required])
    this.newUserForm.controls['LNameUser'].updateValueAndValidity()
    this.newUserForm.controls['AdressUser'].setValidators([Validators.required])
    this.newUserForm.controls['AdressUser'].updateValueAndValidity()
    this.newUserForm.controls['SpecializationUser'].setValidators([Validators.required])
    this.newUserForm.controls['SpecializationUser'].updateValueAndValidity()
    this.newUserForm.controls['RoleUser'].setValidators([Validators.required])
    this.newUserForm.controls['RoleUser'].updateValueAndValidity()
    if (this.newUserForm.valid) {
      let newUser = new User()
      newUser.Id = this.newUserForm.controls['IdUser'].value
      newUser.Firstname = this.newUserForm.controls['FNameUser'].value
      newUser.LastName = this.newUserForm.controls['LNameUser'].value
      newUser.address = this.newUserForm.controls['AdressUser'].value
      newUser.Specialization = this.newUserForm.controls['SpecializationUser'].value
      newUser.Role = this.newUserForm.controls['RoleUser'].value

      this.Userservise.CreateNewUser(newUser).subscribe((data) => {
        console.log('the user enter ')
      })
    }
  }
}
