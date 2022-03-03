import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
  files: Set<File>;
  sub: Subscription[] = [];
  progress = 0;

  constructor(private service: UploadFileService) {}

  ngOnInit() {}

  // não é necessário utilizar o código abaixo com bootstrap 5,
  // porém não consegui fazer aparecer os arquivos selecionados
  onChange(event: any) {
    console.log(event);

    const selectedFiles = <FileList>event.srcElement.files;
    // document.getElementById('customFileLabel').innerHTML = selectedFiles[0].name;

    const fileNames = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }
    document.getElementById('customFileLabel').innerHTML = fileNames.join(', ');

    this.progress = 0;
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, environment.BASE_URL + '/upload')
      .subscribe((event: HttpEvent<Object>) => {
        // HttpEventType
         console.log(event);
         if (event.type === HttpEventType.Response) {
           console.log('Upload Concluído');
         } else if (event.type === HttpEventType.UploadProgress) {
           const percentDone = Math.round((event.loaded * 100) / event.total);
           console.log('Progresso', percentDone);
           this.progress = percentDone;
           
         }
       } );
    }
  }

  // não sei se está funcionando, aula 137 loiane pede para não usar o take e sim ngOnDestroy
  ngOnDestroy() {
    this.sub.forEach(s => s.unsubscribe());
    console.log(`${this.files} foi destruído.`);
  }

}
