import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Specializations } from 'src/app/models/Specializations';
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
      specializationName:new FormControl('',Validators.required),
      specializationNum:new FormControl('',Validators.required)
    }) 
  }
  send(){
    
    this.newSpecialization.controls['specializationName'].setValidators([Validators.required])
    this.newSpecialization.controls['specializationName'].updateValueAndValidity()
    this.newSpecialization.controls['specializationNum'].setValidators([Validators.required])
    this.newSpecialization.controls['specializationNum'].updateValueAndValidity()

    if(this.newSpecialization.valid)
    var newSpec=new Specializations()
    newSpec.SpecializationsNum=this.newSpecialization.controls['specializationNum'].value;
    newSpec.SpecializationsName=this.newSpecialization.controls['specializationName'].value;
    {
      console.log('yyyyyyyyyyyy')
      this.Userservise.enterSpecialization(newSpec).subscribe((data)=>{
        console.log("new Specialization: "+data)
      })
    }
  }

}
