import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TareasUsuariosService {

  constructor(private httpClient:HttpClient) { }

  getTareasUsuarios(idUsuario:number){
    return this.httpClient.get(`https://dummyjson.com/todos/user/${idUsuario}`);
  }
}
