import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EDITARPageRoutingModule } from './editar-routing.module';

import { EDITARPage } from './editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EDITARPageRoutingModule
  ],
  declarations: [EDITARPage]
})
export class EDITARPageModule {}
