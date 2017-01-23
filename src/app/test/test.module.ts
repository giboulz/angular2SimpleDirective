import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { DirectiveTestDirective } from './directive-test.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestComponent, DirectiveTestDirective]
})
export class TestModule { }
