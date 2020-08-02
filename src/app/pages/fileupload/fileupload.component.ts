import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadfileService } from './uploadfile.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {

  /*https://stackblitz.com/edit/ng2-pdf-viewer-u1sbr7?file=src%2Fapp%2Fapp.component.ts*/

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
  src = FileList;
  selecionado = './assets/pdfs/cv.pdf';

  /*src: string[] = ['./assets/pdfs/cv.pdf' , './assets/pdfs/cv2.pdf'];*/
  /*src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'*/

  constructor(private uploadService: UploadfileService) { }

  ngOnInit() {
    this.fileInfos = this.uploadService.getFiles();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Não foi possível carregar o arquivo !';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }
}
