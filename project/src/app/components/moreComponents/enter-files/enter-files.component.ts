import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Files } from 'src/app/models/Files';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-enter-files',
  templateUrl: './enter-files.component.html',
  styleUrls: ['./enter-files.component.css']
})
export class EnterFilesComponent implements OnInit {
  newFileForm:FormGroup
  constructor(private router: Router, private Userservise: UsersService) { }

  ngOnInit(): void {
    this.newFileForm=new FormGroup({
      SubjectNum:new FormControl("",Validators.required),
      FileCategory:new FormControl(Validators.required),
      NameFile:new FormControl("",Validators.required),
      RoutingFile:new FormControl("",Validators.required),
      EndingFile:new FormControl(Validators.required),
     
    })
  }
send(){
  this.newFileForm.controls['SubjectNum'].setValidators([Validators.required])
  this.newFileForm.controls['SubjectNum'].updateValueAndValidity()
  this.newFileForm.controls['FileCategory'].setValidators([Validators.required])
  this.newFileForm.controls['FileCategory'].updateValueAndValidity()
  this.newFileForm.controls['NameFile'].setValidators([Validators.required])
  this.newFileForm.controls['NameFile'].updateValueAndValidity()
  this.newFileForm.controls['RoutingFile'].setValidators([Validators.required])
  this.newFileForm.controls['RoutingFile'].updateValueAndValidity()
  this.newFileForm.controls['EndingFile'].setValidators([Validators.required])
  this.newFileForm.controls['EndingFile'].updateValueAndValidity()
  if(this.newFileForm.valid){
    let newFile=new Files()
    newFile.SubjectNum=this.newFileForm.controls['SubjectNum'].value
    newFile.FileCategory=this.newFileForm.controls['FileCategory'].value
    newFile.NameFile=this.newFileForm.controls['NameFile'].value
    newFile.RoutingFile=this.newFileForm.controls['RoutingFile'].value
    newFile.EndingFile=this.newFileForm.controls['EndingFile'].value
    newFile.UpdateDateFile=new Date()
    this.Userservise.AddNewFile(newFile).subscribe((data)=>{
      console.log('succces of enter new file')
      
    })
  }
}
}
