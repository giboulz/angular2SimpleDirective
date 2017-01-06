import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[gpmShowOnPrivilege]'
})
export class ShowOnPrivilegeDirective {

  @Input('allowOn') authorizedPrivilege: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }


  @Input('gpmShowOnPrivilege') set allowOn(privilege: string) {
    console.log(privilege);

    //forcer les comparaisons en minuscule
    if (privilege.indexOf('app1') >= 0) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }

  }


}
