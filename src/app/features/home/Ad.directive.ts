import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adHost]',
})
export class AdDirective {
  static viewContainerRef: any;
  constructor(public viewContainerRef: ViewContainerRef) {}
}
