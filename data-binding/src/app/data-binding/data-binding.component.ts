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
  nomeDoCurso: string = "Angular";
  valorInicial: number = 15;

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

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
