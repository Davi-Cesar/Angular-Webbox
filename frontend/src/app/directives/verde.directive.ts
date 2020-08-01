import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appVerde]'
})
export class VerdeDirective {

  constructor(private el: ElementRef ) {
    el.nativeElement.style.color = 'chartreuse'
  }
    
}
