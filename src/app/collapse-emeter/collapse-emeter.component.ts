import { Component, OnInit } from '@angular/core';
import {CollaspableService} from '../collaspable.service'; 

@Component({
  selector: 'app-collapse-emeter',
  templateUrl: './collapse-emeter.component.html',
  styleUrls: ['./collapse-emeter.component.css']
})
export class CollapseEmeterComponent implements OnInit {
  public isCollapsed: boolean = false;

  constructor(private collapsableService : CollaspableService) { }

  ngOnInit() {
  }

  collapseMenu(){
    this.isCollapsed = !this.isCollapsed; 
    this.collapsableService.changeAndEmitValue(this.isCollapsed); 
  }

}
