import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  getErrorMessage() {
    if (this.usuario.email.hasError('required')) {
      return 'You must enter a value';
    }
    return true
  }

  onSubmit(form: any) {
    console.log(form);
    //console.log(this.usuario);
  }


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  consultaCEP(cep: any) {

    // Nova variável CEP, somente com dígitos
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .pipe(map(dados => dados))
          .subscribe(dados => console.log(dados))
      }
    }

  }


}
