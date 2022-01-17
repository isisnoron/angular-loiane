import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy
 {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor')
   }

  ngOnInit(){
    this.log('ngOnInit')
  }

  ngOnChanges(){
    this.log('ngOnChanges')
  }

  ngDoCheck(){
    this.log('ngDoCheck')
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    this.log('ngAfterContentInit')
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked')
  }

  ngOnDestroy(){
    this.log('ngOnDestroy')
  }

  private log(hook: string){
    console.log(hook)
  }

}
