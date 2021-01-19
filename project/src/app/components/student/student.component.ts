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
   SubjectS: Files[]
  constructor(private router: Router, private Userservise: UsersService) { 
 

  }
  ngOnInit(): void {
  this.Userservise.GetAllSubjectsFromSchedule().subscribe((data)=>{
    this.SubjectS=data;
    console.log( "GetSubjectsSchedule"+data)
    console.log(this.SubjectS)
  })
    
  }

}
