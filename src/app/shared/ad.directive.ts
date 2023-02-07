import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adHost]',
})
export class adDirective {
  static viewContainerRef: any;
  constructor(public viewContainerRef: ViewContainerRef) {}
}
