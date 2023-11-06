import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageinicialPage } from './pageinicial.page';

const routes: Routes = [
  {
    path: '',
    component: PageinicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageinicialPageRoutingModule {}
