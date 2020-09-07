import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard'
import { NoauthGuard } from './guards/noauth.guard'

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

import { APP_ROUTES } from '../app/components/app/app.routes';
import { InicioComponent } from './components/app/inicio/inicio.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent, canActivate: [NoauthGuard] 
  },
  {
    path: 'register', component: RegisterComponent,canActivate: [NoauthGuard]
  }, 
  {
    path: 'app',
    component: InicioComponent,
    canActivate: [AuthGuard],
    children: APP_ROUTES
  },
  { path: '**', pathMatch: 'full', redirectTo: 'app' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
