import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { SampleServiceService } from 'src/app/shared/services/sample-service.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  currentSubject="english"
  constructor( private sampleService:SampleServiceService) { }

  ngOnInit(): void {
  }
  makav(){
    console.log("9")
this.sampleService.getAllRoles().subscribe((result)=>{
  console.log(result);
});
  }
}
