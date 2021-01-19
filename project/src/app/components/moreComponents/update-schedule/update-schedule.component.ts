import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from 'src/app/models/Schedule';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.css']
})
export class UpdateScheduleComponent implements OnInit {
date;
numSpe;
numSub;
  constructor(private router: Router, private Userservise: UsersService) { }
   
  ngOnInit(): void {
   date: Date
    let numSpe: number
    let numSub: number
  }
  send() {
  
    let newSchedule = new Schedule()
    newSchedule.ScheduleDate = this.date;
    newSchedule.SpecializationNum = this. numSpe;
    newSchedule.SubjectNum =this. numSub;
    console.log(newSchedule)
    this.Userservise.CreateNewSchedule(newSchedule).subscribe((data) => {
      console.log("enter new schedule: " + Date)
    })
  }
}
