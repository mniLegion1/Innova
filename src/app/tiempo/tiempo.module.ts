import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiempoPageRoutingModule } from './tiempo-routing.module';

import { TiempoPage } from './tiempo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiempoPageRoutingModule,
    HttpClientModule
  ],
  providers:[Geolocation],
  declarations: [TiempoPage]
})
export class TiempoPageModule {}
