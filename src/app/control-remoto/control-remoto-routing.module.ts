import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlRemotoPage } from './control-remoto.page';

const routes: Routes = [
  {
    path: '',
    component: ControlRemotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlRemotoPageRoutingModule {}
