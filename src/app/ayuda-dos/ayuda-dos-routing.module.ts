import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyudaDosPage } from './ayuda-dos.page';

const routes: Routes = [
  {
    path: '',
    component: AyudaDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyudaDosPageRoutingModule {}
