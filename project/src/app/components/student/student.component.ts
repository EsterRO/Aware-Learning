import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { Files } from 'src/app/models/Files';

import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  SubjectS: Array<string>
 @Output() fsub
 
    constructor(private router: Router, private Userservise: UsersService) {
  }
  ngOnInit(): void {
    this.Userservise.GetAllSubjectsFromSchedule().subscribe((data) => {
      console.log(data)
      this.SubjectS=data;
      console.log("GetSubjectsSchedule" + data)
      console.log(this.SubjectS)
    })

  }
  enterToLesson(fsub: Files) {
    this.router.navigate(['../moreComponents/view-lesson'],)
   fsub=fsub;
   console.log(fsub)
  }
}
