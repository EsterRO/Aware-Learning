import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  studentsB: Array<object>;


  constructor(private router: Router, private Userservise: UsersService) { }
  placeForm: FormGroup
  ngOnInit(): void {
    this.studentsB = new Array<object>()
    this.send()
    this.placeForm = new FormGroup({
      // IdUser: new FormControl('', Validators.required),
      /*  NumRoomUser: new FormGroup('', Validators.required),
       FromTime: new FormGroup('', Validators.required),
       ToTime: new FormGroup('', Validators.required) */
    })

  }
  send() {
    this.studentsB = new Array<object>()
    /*   this.placeForm.controls['IdUser'].setValidators([Validators.required])
      this.placeForm.controls['IdUser'].updateValueAndValidity() */
    this.placeForm.controls['NumRommUser'].setValidators([Validators.required])
    this.placeForm.controls['NumRoomUser'].updateValueAndValidity()
    this.placeForm.controls['FromTime'].setValidators([Validators.required])
    this.placeForm.controls['FromTime'].updateValueAndValidity()
    this.placeForm.controls['ToTime'].setValidators([Validators.required])
    this.placeForm.controls['ToTime'].updateValueAndValidity()
    if (this.placeForm.valid) {
      /* this.Userservise.PlaceUser(this.placeForm.controls['NumRommUser'].value, this.placeForm.controls['FromTime'].value, this.placeForm.controls['ToTime'].value).subscribe((ans) => {
        ans.forEach(s => {
          this.studentsB.push(s)
        }) */
        console.log('the students are: ' + this.studentsB.toString())
      //})
    }
  }
}
