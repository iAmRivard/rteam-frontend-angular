import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  usuario: Usuario;
  load = true;
  imgConf = true;
  // Preview IMG
  imgURL: any;
  public imagePath;
  public message_noimg: string;
  // actualizar
  public actualizarImg = false;

  constructor(private _usuario: UsuarioService) {

  }

  ngOnInit(): void {
      this._usuario.getUsuario()
        .subscribe((user: Usuario) => {
          this.usuario = user;
          this.load = false;
          this.usuario.rol = this.usuario.rol.toLowerCase();
          this._usuario.usuarioEmit(this.usuario)
          console.log(this.usuario);
        }, (err) => {
          console.log(err)
        });
    
  }


  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message_noimg = "Solo imagenes.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.actualizarImg = true;
      console.log(this.imgURL)
    }
  }

  rechazarImg(){
    this.imgURL = null;
    this.actualizarImg = false;
  }

  updateImg(){
    this._usuario.upImgUsuario(this.imgURL)
    .subscribe((resp:any)=>{
      console.log(resp);
      this.usuario.foto = this.imgURL;
      this.usuario.rol = this.usuario.rol.toLowerCase();
      this._usuario.usuarioEmit(this.usuario)
    },(err)=>{
      console.log(err);
    })
  }



}
