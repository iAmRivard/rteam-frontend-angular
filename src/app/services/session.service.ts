import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  API_URL: String = environment.api;

  constructor(private http: HttpClient, private router: Router) {
    console.log("Start")
    console.log(this.API_URL)
  }

  login(usuario: Usuario) {
    return this.http.post(`${this.API_URL}/login`, usuario);
  }

  verify(){
    return this.http.post(`${this.API_URL}/usuarios/verificarToken`, {id: this.getId(), token: this.getToken()});
  }

  setToken(token: string) {
    localStorage.setItem("token", token);
  }
  getToken() {
   return localStorage.getItem("token");
  }

  setId(id: string) {
    localStorage.setItem("id", id);
  }
  getId() {
   return localStorage.getItem("id");
  }

  logout(){
    this.setToken(null)
    this.setId(null)
  }
}
