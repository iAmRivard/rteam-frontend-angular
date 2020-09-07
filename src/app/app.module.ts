import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Mis componentes */
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuUsuariosComponent } from './components/shared/menu-usuarios/menu-usuarios.component';
import { InicioComponent } from './components/app/inicio/inicio.component';
import { JuegosComponent } from './components/app/juegos/juegos.component';
import { EquiposComponent } from './components/app/equipos/equipos.component';
import { VacantesComponent } from './components/app/vacantes/vacantes.component';
import { BlogComponent } from './components/app/blog/blog.component';
import { ConfiguracionComponent } from './components/app/configuracion/configuracion.component';
import { InformacionComponent } from './components/app/informacion/informacion.component';
import { DashboardComponent } from './components/app/dashboard/dashboard.component';
import { EquipoComponent } from './components/app/equipos/equipo/equipo.component';
import { ParticipandoComponent } from './components/app/equipos/participando/participando.component';
import { AppMenuComponent } from './components/shared/app-menu/app-menu.component';
import { TodosComponent } from './components/app/equipos/todos/todos.component';
import { PropiosComponent } from './components/app/equipos/propios/propios.component';
import { CrearEquipoComponent } from './components/app/equipos/crear-equipo/crear-equipo.component';
import { JuegosAdminComponent } from './components/admin/juegos-admin/juegos-admin.component';
import { CategoriasAdminComponent } from './components/admin/categorias-admin/categorias-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    MenuUsuariosComponent,
    InicioComponent,
    JuegosComponent,
    EquiposComponent,
    VacantesComponent,
    BlogComponent,
    ConfiguracionComponent,
    InformacionComponent,
    DashboardComponent,
    EquipoComponent,
    ParticipandoComponent,
    AppMenuComponent,
    TodosComponent,
    PropiosComponent,
    CrearEquipoComponent,
    JuegosAdminComponent,
    CategoriasAdminComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
