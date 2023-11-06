import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EDITARPage } from './editar.page';

const routes: Routes = [
  {
    path: '',
    component: EDITARPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EDITARPageRoutingModule {}
