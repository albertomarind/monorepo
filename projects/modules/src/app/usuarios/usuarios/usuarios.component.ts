import {Component, OnInit} from '@angular/core';
import {UsuariosService} from "../services/usuarios.service";
import {ResponseUsers} from "../models/response-users.interface";
import {Usuario} from "../models/usuario.interface";
import {TareasUsuariosService} from "../services/tareas-usuarios.service";
import {from, of, switchMap, toArray} from "rxjs";


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  usuario:any = null;

  constructor(
    private usuariosService: UsuariosService,
    private tareasUsuariosService: TareasUsuariosService
  ) {
  }

  ngOnInit(): void {
    this.usuariosService.getUsers().pipe().subscribe({
      next: (response: ResponseUsers) => {
        this.usuarios = response.users;
      }
    })

    this.usuariosService.getUserById(1).pipe(
      switchMap((usuario: Usuario) => {
        return this.tareasUsuariosService.getTareasUsuarios(usuario.id).pipe(
          switchMap((response: any) => {
            return of({usuario, todos: response.todos})
          })
        );
      }),
    ).subscribe({
      next: (response) => {
        console.log(response);
        this.usuario = response;
      }
    })
  }
}
