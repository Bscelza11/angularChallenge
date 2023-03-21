import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adCards]',
})
export class CardHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
