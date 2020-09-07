import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { UsuarioService } from 'src/app/services/usuario.service';

import { Usuario } from '../../../models/usuario.model'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuario: Usuario;
  load = false;
  constructor(private _session: SessionService,private _usuario:UsuarioService) { }

  ngOnInit(): void {
    this._usuario.getUsuario()
    .subscribe((user:Usuario)=>{
      this.usuario = { ...user };
      this.usuario.rol = this.usuario.rol.toLowerCase();
      this.load = true;
      this._usuario.user.emit(this.usuario);
    },(error)=>{
    });

    this._usuario.user
    .subscribe((resp:any) =>{
      this.usuario = resp;
    }, (err)=>{
      console.log(err)
    })
  }

 
}
