import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TemplateRef, ViewContainerRef } from '@angular/core';


import { AppComponent } from './app.component';
import { HighLightDirective } from './high-light.directive';
import { ShowOnPrivilegeDirective } from './show-on-privilege.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighLightDirective,
    ShowOnPrivilegeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
