import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsuariosModule} from "./usuarios/usuarios.module";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then((m) => m.UsuariosModule)
  },
  {
    path: 'roles',
    loadChildren: () => import('./roles/roles.module').then((m) => m.RolesModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
