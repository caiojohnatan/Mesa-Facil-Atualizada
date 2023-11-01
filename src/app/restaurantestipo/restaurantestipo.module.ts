import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantestipoPageRoutingModule } from './restaurantestipo-routing.module';

import { RestaurantestipoPage } from './restaurantestipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantestipoPageRoutingModule
  ],
  declarations: [RestaurantestipoPage]
})
export class RestaurantestipoPageModule {}
