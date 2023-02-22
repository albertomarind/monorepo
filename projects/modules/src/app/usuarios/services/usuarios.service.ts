import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseUsers} from "../models/response-users.interface";
import {Usuario} from "../models/usuario.interface";

@Injectable()
export class UsuariosService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<ResponseUsers> {
    return this.httpClient.get<ResponseUsers>('https://dummyjson.com/users');
  }

  getUserById(idUsuario: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>('https://dummyjson.com/users/' + idUsuario);
  }
}
