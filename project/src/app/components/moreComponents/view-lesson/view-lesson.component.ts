import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Files } from 'src/app/models/Files';
import { UsersService } from 'src/app/service/users.service';
import { readFile, readdir } from 'fs';
@Component({
  selector: 'app-view-lesson',
  templateUrl: './view-lesson.component.html',
  styleUrls: ['./view-lesson.component.css']
})
export class ViewLessonComponent implements OnInit {
  @Input() fsub;
  numSub: number;
  //Files: Array< Files>
  Files:Files[]=[]
  constructor(private router: Router, private Userservise: UsersService) { }

  ngOnInit(): void {
    this.Userservise.ReaturnNumS(this.fsub).subscribe((data) => {
      console.log(data)
      this.numSub = data
    })
    this.Userservise.GetAllFiles(this.numSub).subscribe((data)=>{
      this.Files=new Array<Files>()
      console.log(data)
      this.Files=data
    })
    
  }

}
