import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { UsuarioService } from 'src/app/services/usuario.service';

import { Usuario } from '../../models/usuario.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: Usuario;
  load = false;
  constructor(private _session: SessionService,private _usuario:UsuarioService) { }

  ngOnInit(): void {
    this._usuario.getUsuario()
    .subscribe((user:Usuario)=>{
      this.usuario = { ...user };
      this.usuario.rol = this.usuario.rol.toLowerCase();
      this.load = true;
    },(error)=>{
    })
  }

 

}
