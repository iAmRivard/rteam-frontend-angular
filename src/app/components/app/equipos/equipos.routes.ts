import {Routes } from '@angular/router';
import { ParticipandoComponent } from './participando/participando.component';
import { TodosComponent } from './todos/todos.component';
import { PropiosComponent } from './propios/propios.component';
import { CrearEquipoComponent } from './crear-equipo/crear-equipo.component';

export const EQUIPOS_ROUTES: Routes =[
    { path: '', component: TodosComponent},
    { path: 'participando', component: ParticipandoComponent},
    { path: 'propios', component: PropiosComponent},
    { path: 'crear', component: CrearEquipoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'app' },
]
