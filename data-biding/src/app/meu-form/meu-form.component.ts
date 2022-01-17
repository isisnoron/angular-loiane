import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {
  nome : string = "Maria";
  pessoa : any = {
    nome: 'Isis Beatriz',
    idade: 27
  }

  constructor() { }

  ngOnInit(): void {
  }

}
