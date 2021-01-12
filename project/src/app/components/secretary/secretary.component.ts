import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})
export class SecretaryComponent implements OnInit {

  constructor(private router: Router, private Userservise: UsersService) { }

  ngOnInit(): void {
  }
  enterUsers(){
    console.log('enteruser')
    this.router.navigate(['../moreComponents/enter-new-user'])
  }
  PlaceStudents(){
    this.router.navigate(['../moreComponents/places'])
  }
  enterSpecialization(){
    this.router.navigate(['../moreComponents/enter-specialization'])
  }
  enterSubjectsToSpecialization(){
    this.router.navigate(['../moreComponents/enter-subjects'])
  }
  updateSchedule(){
    this.router.navigate(['../moreComponents/update-schedule'])
  }
  NewFile(){
    this.router.navigate(['../moreComponents/enter-files'])
  }
}
