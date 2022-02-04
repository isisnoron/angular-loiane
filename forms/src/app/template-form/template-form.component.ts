import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario:any = {
    nome: null,
    email: null
  }

  getErrorMessage() {
    if (this.usuario.email.hasError('required')) {
      return 'You must enter a value';
    }
    return true
  }

  onSubmit(form:any) {
    console.log(form);
    //console.log(this.usuario);
  }


  constructor() { }

  ngOnInit(): void {
  }

  // verificaValidTouched(campo:any){
  //   return !campo.valid && campo.touched
  // }

  // aplicaCssErro(campo:any){
  //   return !campo.valid && campo.touched
 
  // }


}
