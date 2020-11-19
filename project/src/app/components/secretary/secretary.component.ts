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
    this.router.navigate['/moreComponents/enter-new-user']
  }
}
