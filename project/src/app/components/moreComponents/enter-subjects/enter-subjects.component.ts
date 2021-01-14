import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subjects } from 'src/app/models/Subject';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-enter-subjects',
  templateUrl: './enter-subjects.component.html',
  styleUrls: ['./enter-subjects.component.css']
})
export class EnterSubjectsComponent implements OnInit {
  newSubject:FormGroup
  constructor(private router: Router, private Userservise: UsersService) { }

  ngOnInit(): void {
    this.newSubject= new FormGroup({
      SpecializationNum:new FormControl('', Validators.required),
      SubjectName:new FormControl('',Validators.required),
      UserId:new FormControl('',Validators.required)
    })
  }
send(){
  this.newSubject.controls['SpecializationNum'].setValidators([Validators.required])
  this.newSubject.controls['SpecializationNum'].updateValueAndValidity
  this.newSubject.controls['SubjectName'].setValidators([Validators.required])
  this.newSubject.controls['SubjectName'].updateValueAndValidity
  this.newSubject.controls['UserId'].setValidators(Validators.required)
  this.newSubject.controls['UserId'].updateValueAndValidity
  if(this.newSubject.valid){
    let newSubject=new Subjects()
    newSubject.specializationsNum=this.newSubject.controls['SpecializationNum'].value
    newSubject.subjectName=this.newSubject.controls['SubjectName'].value
    newSubject.userId=this.newSubject.controls['UserId'].value
    this.Userservise.enterSubject(newSubject).subscribe((data)=>{
      console.log("data from new Subject: "+data)
      
    })
  }
}
}
