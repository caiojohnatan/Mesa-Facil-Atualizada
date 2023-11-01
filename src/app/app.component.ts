import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Configurações', url: '/folder/main-page', icon: 'cog' },
    { title: 'Histórico', url: '/folder/outbox', icon: 'receipt' },
    { title: 'Sair', url: '/folder/favorites', icon: 'exit'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
