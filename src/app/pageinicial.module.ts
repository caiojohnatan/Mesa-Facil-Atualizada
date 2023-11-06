import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageinicialPageRoutingModule } from './pageinicial-routing.module';

import { PageinicialPage } from './pageinicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageinicialPageRoutingModule
  ],
  declarations: [PageinicialPage]
})
export class PageinicialPageModule {}
