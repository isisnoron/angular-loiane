import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  
  @Input() valor: number = 0
  @Output() mudouValor = new EventEmitter();

  //Primeira forma usada para mudar o valor input:

  // incrementa(){
  //   this.valor++
  //   this.mudouValor.emit({novoValor : this.valor})
  // }

  // decrementa(){
  //   this.valor--
  //   this.mudouValor.emit({novoValor : this.valor})
  // }

  //Segunda forma: acessar o valor do input diretamente pelo DOM, buscando pela variavel criada #campoInput

  @ViewChild('campoInput') campoValorInput!: ElementRef

  incrementa(){
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
