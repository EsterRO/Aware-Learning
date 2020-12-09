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
  }
  send() {
    let date: Date
    let numSpe: number
    let numSub: number
    let newSchedule = new Schedule()
    newSchedule.ScheduleDate = date;
    newSchedule.SpecializationNum = numSpe;
    newSchedule.SubjectNum = numSub;
    this.Userservise.CreateNewSchedule(newSchedule).subscribe((data) => {
      console.log("enter new schedule: " + date)
    })
  }
}
