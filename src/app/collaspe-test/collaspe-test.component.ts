import { Component, OnInit, Input } from '@angular/core';
import { CollaspableService } from '../collaspable.service';

@Component({
  selector: 'app-collaspe-test',
  templateUrl: './collaspe-test.component.html',
  styleUrls: ['./collaspe-test.component.css']
})
export class CollaspeTestComponent implements OnInit {

  @Input() public isCollapsed: boolean = false;

  constructor(private collapsableService: CollaspableService) {
    collapsableService.isCollapse.subscribe((res) => { this.isCollapsed = res });
  }

  ngOnInit() {
  }




  public collapsed(event: any): void {
    console.log(event);
  }

  public expanded(event: any): void {
    console.log(event);
  }
}
