import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
  fileSelected: boolean = false;
  selectedFile?: String | null = null;
  showUploadIcon = false;

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.fileSelected = true;
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        if (e.target) {
          this.selectedFile = e.target.result as string;
        }
      };
  
      reader.readAsDataURL(file);
    } else {
      this.fileSelected = false;
      this.selectedFile = null;
    }
  }
  

  uploadFile() {
    if (this.selectedFile) {
      // Aqui você pode implementar a lógica para fazer o upload do arquivo.
      // Você pode usar serviços HTTP para enviar o arquivo para um servidor, por exemplo.
      // this.fileService.uploadFile(this.selectedFile).subscribe(response => {
      //   console.log('Arquivo enviado com sucesso!', response);
      // });
    }

}}
