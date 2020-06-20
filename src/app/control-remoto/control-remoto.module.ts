import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlRemotoPageRoutingModule } from './control-remoto-routing.module';

import { ControlRemotoPage } from './control-remoto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlRemotoPageRoutingModule
  ],
  declarations: [ControlRemotoPage]
})
export class ControlRemotoPageModule {}
