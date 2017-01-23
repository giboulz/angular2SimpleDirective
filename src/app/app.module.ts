import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TemplateRef, ViewContainerRef } from '@angular/core';


import { AppComponent } from './app.component';
import { HighLightDirective } from './high-light.directive';
import { ShowOnPrivilegeDirective } from './show-on-privilege.directive';

import { Privilege } from './Privilege';
import { CollaspeTestComponent } from './collaspe-test/collaspe-test.component';

/**bootstrap */
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { CollapseEmeterComponent } from './collapse-emeter/collapse-emeter.component';
import { CollaspableService } from './collaspable.service';
@NgModule({
  declarations: [
    AppComponent,
    HighLightDirective,
    ShowOnPrivilegeDirective,
    CollaspeTestComponent,
    CollapseEmeterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule.forRoot()
  ],
  providers: [
    { provide: Privilege, useValue: Privilege },
    CollaspableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
