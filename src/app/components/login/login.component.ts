import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginUsuario: Login;
  mensaje: String;

  constructor(private _session: SessionService, private fb: FormBuilder,private router: Router) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.loginForm = this.fb.group({
      usuario: ['usuario', [Validators.required, Validators.minLength(3)]],
      clave: ['123', [Validators.required]]
    });
  }


  get validLoginForm() {
    return this.loginForm.get('usuario').invalid && this.loginForm.get('usuario').touched || this.loginForm.get('clave').invalid && this.loginForm.get('clave').touched;
  }

  login() {

    if (this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).forEach(control => {
        control.markAsTouched();
      })
    } else {
      this.loginUsuario = this.loginForm.value;
      this._session.login(this.loginUsuario)
      .subscribe((credenciales:Login) =>{
        if (credenciales.status) {
          this.mensaje = "Credenciales incorrectas."
        }else{
          console.log(credenciales)
          this._session.setToken(credenciales.token);
          this._session.setId(credenciales.id);
          this.router.navigateByUrl('/app')
        }
      },(error) =>{
        this.mensaje = "Estamos teniendo problemas para iniciar, intenta luego.";
      } )
    }

  }


}

interface Login {
  usuario: string;
  id?: string;
  clave?: string;
  token?: string;
  status?:any;
};