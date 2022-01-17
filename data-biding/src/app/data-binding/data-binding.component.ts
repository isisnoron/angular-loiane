import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImg: string = 'https://s2.drogasil.com.br/skin/frontend/drogasil/default/images/media/logo.png';
  valorAtual: string = "";
  valorSalvo: string = "";
  isMouseOver: boolean = false;
  nome: string = "abc";
  pessoa: any = {
    nome: "def",
    age: 20
  }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert ('Botão clicado!')
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }


  constructor() { }

  ngOnInit(): void {
  }

}
