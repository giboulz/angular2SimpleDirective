import { Injectable, EventEmitter, Input, Output } from '@angular/core';

@Injectable()
export class CollaspableService {
  @Output() isCollapse: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  changeAndEmitValue(value : boolean){
    console.log('changing value'); 
    this.isCollapse.emit(value); 
  }

}
