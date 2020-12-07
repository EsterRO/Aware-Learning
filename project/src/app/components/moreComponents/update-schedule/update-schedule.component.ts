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

  constructor(private router: Router, private Userservise: UsersService) { }

  ngOnInit(): void {
  }
  send() {
    const date = document.getElementById("date").value;
    const numSpe = document.getElementById("numSep").value
    const numSub=document.getElementById("numSub").value
    let newSchedule= new Schedule()
    newSchedule.ScheduleDate=date;
    newSchedule.SpecializationNum=numSpe;
    newSchedule.SubjectNum=numSub;
    this.Userservise.CreateNewSchedule(newSchedule).subscribe((data)=>{
      console.log("enter new schedule: "+date)
    })
  }
}
