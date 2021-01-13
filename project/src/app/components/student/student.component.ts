import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Files } from 'src/app/models/Files';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  files: Files[];
  subjectsS:string[]
  constructor(private router: Router, private Userservise: UsersService) { }
  ngOnInit(): void {

    this.Userservise.GetAllFiles().subscribe((dataFiles) => {
      console.log('data Files ' + dataFiles);
      this.files=dataFiles
    })
    this.Userservise.GetAllSubjectsFromSchedule().subscribe((dataSub)=>{
     this.subjectsS= dataSub
     console.log(this.subjectsS[1].toString)
    })
  // this.files[1].EndingFile 


  }
  ss(){
  console.log(this.subjectsS[1].toString)
  }
}