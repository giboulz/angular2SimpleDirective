import { Component, Inject, OnInit } from '@angular/core';
import { Privilege } from './Privilege';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  color: string;
  privilegeDeCeBoutonSpecial = ''

  constructor( @Inject(Privilege) public Privilege) {
   // console.log(Privilege);
  }

  ngOnInit(){
    //console.log(Privilege); 
  }
}
