import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantestipoPage } from './restaurantestipo.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantestipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantestipoPageRoutingModule {}
