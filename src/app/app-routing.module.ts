import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'control-remoto',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'BusquedaCG',
    loadChildren: () => import('./dispositivos/dispositivos.module').then( m => m.DispositivosPageModule)
  },
  {
    path: 'TiendaOnline',
    loadChildren: () => import('./tiendaonline/tiendaonline.module').then( m => m.TiendaonlinePageModule)
  },
  {
    path: 'control-remoto',
    loadChildren: () => import('./control-remoto/control-remoto.module').then( m => m.ControlRemotoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
