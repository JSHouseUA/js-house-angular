import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamic-cont]',
})
export class DynamicContainer {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
