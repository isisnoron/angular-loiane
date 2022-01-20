import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
  // se eu quiser que fundoAmarelo seja aplicado somente em paragrafo ou botão, 
  // usar p antes de [, ex: 'p[fundoAmarelo]', 'button[fundoAmarelo]' etc
})
export class FundoAmareloDirective {



  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
    ) { 
    // declarei variavel privada de nome elementRef que é do tipo ElementRef
      
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');



   }

}
