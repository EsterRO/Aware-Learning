import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /*  arr: ["C:\Users\User\Desktop\קליפים\new\זאנוויל דרשו","C:\Users\User\Desktop\קליפים\new\סקולען מלכות"]  */
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
open(){
  this.router.navigate(['/login']);
}
}
