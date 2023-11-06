import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EDITARPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  fileSelected: boolean = false;
  selectedFile: File | undefined;

  redirectToConfig() {
    // Redirecionar para a página de edição
    this.router.navigate(['/config']); // Substitua 'editar' pela rota desejada
  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.fileSelected = true;
      this.selectedFile = event.target.files[0];
    } else {
      this.fileSelected = false;
      this.selectedFile = undefined;
    }
} }
