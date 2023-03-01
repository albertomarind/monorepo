import {Component, OnInit} from '@angular/core';
import {UsuariosService} from "../services/usuarios.service";
import {ResponseUsers} from "../models/response-users.interface";
import {Usuario} from "../models/usuario.interface";
import {TareasUsuariosService} from "../services/tareas-usuarios.service";
import {concatMap, from, of, switchMap, tap, toArray} from "rxjs";


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];

  usuario: any = null;

  constructor(
    private usuariosService: UsuariosService,
    private tareasUsuariosService: TareasUsuariosService
  ) {
  }

  ngOnInit(): void {
    this.usuariosService.getUsers().pipe(
      concatMap((response: ResponseUsers) => from(response.users).pipe(
        concatMap((usuario: Usuario) => this.tareasUsuariosService.getTareasUsuarios(usuario.id).pipe(
          concatMap((response: any) => of({usuario, todos: response.todos})),
        )),
        toArray()
      ))
    ).subscribe({
      next: (response: any) => {
        console.log(response);
        this.usuarios = response;
      }
    });

    // this.usuariosService.getUserById(1).pipe(
    //   switchMap((usuario: Usuario) => {
    //     return this.tareasUsuariosService.getTareasUsuarios(usuario.id).pipe(
    //       switchMap((response: any) => {
    //         return of({usuario, todos: response.todos})
    //       })
    //     );
    //   }),
    // ).subscribe({
    //   next: (response) => {
    //     console.log(response);
    //     this.usuario = response;
    //   }
    // });
  }
}
