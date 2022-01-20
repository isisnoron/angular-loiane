import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor
  }

  @Input('highlight') highlightColor: string = "gray";
  @Input() defaultColor: string = "blue";

  constructor() {
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor// fez que navegador já abrisse na cor padrão verde que coloquei no html
  }
}
