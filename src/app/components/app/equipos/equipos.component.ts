import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  menu = [];

  constructor() {
    this.menu = [
      {
        nombre: "Todos",
        direccion: "/app/equipos"
      },
      {
        nombre: "Particupando",
        direccion: "/app/participando"
      },
      {
        nombre: "Todos",
        direccion: "/app/equipos"
      },


    ]
  }

  ngOnInit(): void {
  }

}
