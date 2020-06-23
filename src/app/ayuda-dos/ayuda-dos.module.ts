import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudaDosPageRoutingModule } from './ayuda-dos-routing.module';

import { AyudaDosPage } from './ayuda-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyudaDosPageRoutingModule
  ],
  declarations: [AyudaDosPage]
})
export class AyudaDosPageModule {}
