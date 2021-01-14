<<<<<<< HEAD
import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
=======
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Files } from 'src/app/models/Files';
import { UsersService } from 'src/app/service/users.service';
>>>>>>> 615178e683cf24a15f3954f60c7974123bd22cd4

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
<<<<<<< HEAD
  
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
  constructor() { }
=======
  files: Files[];
  subjectsS:string[]
  constructor(private router: Router, private Userservise: UsersService) { }
>>>>>>> 615178e683cf24a15f3954f60c7974123bd22cd4
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