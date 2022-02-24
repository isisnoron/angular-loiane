import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>'
})

export abstract class BaseFormComponent implements OnInit {

  formulario: any = FormGroup;

  constructor() { }

  ngOnInit() {
  }

  abstract submit(): any;

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      console.log('formulario inválido')
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle?.markAsDirty();
      controle?.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  // verificaValidTouched(campo: string) {
  //   return (
  //     !this.formulario.get(campo).valid &&
  //     (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
  //   );
  // }

}