import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['../../../app.component.css']
})
export class PorPaisComponent{

  termino:string='Hola Mundo'

  constructor() { }

  buscar(){
    console.log(this.termino)
  }
}
