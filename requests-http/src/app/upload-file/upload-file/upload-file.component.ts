import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // não é necessário utilizar o código abaixo com bootstrap 5, 
  // porém não consegui fazer aparecer os arquivos selecionados
  // onChange(event: any) {
  //   console.log(event);

  //   const selectedFiles = <FileList>event.srcElement.files;
  //   // document.getElementById('customFileLabel').innerHTML = selectedFiles[0].name;

  //   const fileNames = [];
  //   for (let i = 0; i < selectedFiles.length; i++) {
  //     fileNames.push(selectedFiles[i].name);
  //   }
  //   document.getElementById('customFileLabel').innerHTML = fileNames.join(', ');
  // }
}