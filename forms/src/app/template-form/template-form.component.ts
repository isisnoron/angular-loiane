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
    this.http.post('https://httpbin.org/get', JSON.stringify(form.value))
    .pipe(map(res => res))
    .subscribe(dados => console.log(dados));
  }

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }

  consultaCEP(cep: any, formulario: any) {

    // Nova variável CEP, somente com dígitos
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {

        this.resetaDadosForm(formulario);

        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .pipe(map(dados => dados))
          .subscribe(dados => this.populaDadosForm(dados, formulario));
      }
    }

  }
  populaDadosForm(dados: any, formulario: any) {
    // f.setValue({
    //   nome: null,
    //   email: null,
    //   endereco: {
    //     cep: dados.cep,
    //     numero: '',
    //     rua: dados.logradouro,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // })
    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  resetaDadosForm(formulario:any){
    formulario.form.patchValue({
      endereco: {
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
    
  }

}
