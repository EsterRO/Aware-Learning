import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {


  constructor(private router: Router, private Userservise: UsersService) { }

  ngOnInit(): void {
  }
  Send_masage() { }
  Fill_Tracking_students() {}
  Tracking_students() {
    this.Userservise.TrackingStudents().subscribe((data) => {
      console.log('Tracking students: ' + data)
    })

  }



}
