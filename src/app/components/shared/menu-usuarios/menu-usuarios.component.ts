import { Component, OnInit,Input } from '@angular/core';
import { Usuario } from '../../../models/usuario.model'
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-usuarios',
  templateUrl: './menu-usuarios.component.html',
  styleUrls: ['./menu-usuarios.component.css']
})
export class MenuUsuariosComponent implements OnInit {


  @Input() usuario: Usuario;

  constructor(private _session: SessionService, private router: Router) { }
  

  ngOnInit(): void {
    console.log(this.usuario)
  }

  salir(){
    this._session.logout();
    this.router.navigateByUrl('/login')
  }

}
