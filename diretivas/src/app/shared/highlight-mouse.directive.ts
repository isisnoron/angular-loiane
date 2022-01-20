import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'pink'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white'
  }

  constructor() { }

}