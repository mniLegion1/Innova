import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiendaonlinePageRoutingModule } from './tiendaonline-routing.module';

import { TiendaonlinePage } from './tiendaonline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiendaonlinePageRoutingModule
  ],
  declarations: [TiendaonlinePage]
})
export class TiendaonlinePageModule {}
