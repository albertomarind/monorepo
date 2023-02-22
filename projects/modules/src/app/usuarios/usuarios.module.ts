import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import { UsuariosComponent } from './usuarios/usuarios.component';
import {UsuariosRoutingModule} from "./usuarios-routing.module";
import {UsuariosService} from "./services/usuarios.service";
import {TareasUsuariosService} from "./services/tareas-usuarios.service";
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ],
  providers:[
    UsuariosService,
    TareasUsuariosService
  ]
})
export class UsuariosModule { }
