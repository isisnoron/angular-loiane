import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario:any = FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // })

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    })    
  }

  onSubmit(){
    console.log(this.formulario)
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .pipe(map(res => res))
    .subscribe(dados => {
      console.log(dados);
      this.formulario.reset();
    },
    (error:any) => alert('erro'));
  }

  resetar(){
    this.formulario.reset();
  }
  

}
