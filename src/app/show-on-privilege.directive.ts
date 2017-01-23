import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[gpmShowOnPrivilege]'
})
export class ShowOnPrivilegeDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }


  @Input('gpmShowOnPrivilege') set allowOn(privilege: String) {
    //console.log(privilege);

    if (privilege.indexOf('app1') >= 0) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }


  }


}
