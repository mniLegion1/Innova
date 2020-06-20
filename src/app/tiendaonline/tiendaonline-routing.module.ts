import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiendaonlinePage } from './tiendaonline.page';

const routes: Routes = [
  {
    path: '',
    component: TiendaonlinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiendaonlinePageRoutingModule {}
