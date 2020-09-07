import {Routes } from '@angular/router';
import { JuegosComponent } from './juegos/juegos.component';
import { EquiposComponent } from './equipos/equipos.component';
import { VacantesComponent } from './vacantes/vacantes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { InformacionComponent } from './informacion/informacion.component';
import {EQUIPOS_ROUTES } from './equipos/equipos.routes'
import { JuegosAdminComponent } from '../admin/juegos-admin/juegos-admin.component';
import { CategoriasAdminComponent } from '../admin/categorias-admin/categorias-admin.component';

export const APP_ROUTES: Routes =[
    { path: 'equipos', component: EquiposComponent, children:EQUIPOS_ROUTES},
    { path: 'vacantes', component: VacantesComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'configuracion', component: ConfiguracionComponent},
    { path: 'informacion', component: InformacionComponent},
    { path: 'juegos', component: JuegosComponent},
    { path: 'juegos', component: JuegosComponent},
    { path: 'view/juegos', component: JuegosAdminComponent},
    { path: 'view/categorias', component: CategoriasAdminComponent},
    { path: 'view/equipos', component: CategoriasAdminComponent},
    { path: 'view/configuracion', component: CategoriasAdminComponent},


    { path: '**', pathMatch: 'full', redirectTo: 'app' },
]
