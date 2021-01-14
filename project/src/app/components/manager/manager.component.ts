import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private router: Router, private Userservise: UsersService) { }

  ngOnInit(): void {
  }
  TrackingStudents() {
    this.Userservise.TrackingStudents().subscribe((data) => {
      console.log('Tracking students: ' + data)
    })
  }
}
