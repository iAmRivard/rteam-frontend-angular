import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { SessionService } from './session.service'
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URL: String = environment.api;
  AuthUsuario: UsuarioData;
  @Output() user: EventEmitter<Usuario> = new EventEmitter();

  constructor(private http: HttpClient, private router: Router, private _session: SessionService) {

  }

  getUsuario() {
   
    this.getCredUsuario();
    return this.http.post(`${this.API_URL}/usuarios/usuario`, this.AuthUsuario);
  }

  usuarioEmit(u: Usuario) {
    this.user.emit(u);
  }

  upImgUsuario(imagen:string){
    this.getCredUsuario()
    let data = this.AuthUsuario;
    data.imagen = imagen;
    return this.http.post(`${this.API_URL}/usuarios/editar/imagen`, data);
  }

  getCredUsuario(){
    this.AuthUsuario = {
      id: this._session.getId(),
      token: this._session.getToken()
    }
  }

}

interface UsuarioData {
  id: string;
  token: string;
  imagen?: string;
};
