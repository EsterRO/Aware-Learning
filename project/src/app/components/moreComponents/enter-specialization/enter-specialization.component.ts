import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-enter-specialization',
  templateUrl: './enter-specialization.component.html',
  styleUrls: ['./enter-specialization.component.css']
})
export class EnterSpecializationComponent implements OnInit {
  newSpecialization: FormGroup
  constructor(private router: Router, private Userservise: UsersService) { }

  ngOnInit(): void {
    this.newSpecialization=new FormGroup({
      specializationName:new FormControl('',Validators.required)
    }) 
  }
  send(){
    this.newSpecialization.controls['specializationName'].setValidators([Validators.required])
    this.newSpecialization.controls['specializationName'].updateValueAndValidity()
    if(this.newSpecialization.valid)
    {
      this.Userservise.enterSpecialization(this.newSpecialization.controls['specializationName'].value).subscribe((data)=>{
        console.log("new Specialization: "+data)
      })
    }
  }

}
