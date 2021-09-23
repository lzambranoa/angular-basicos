import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  borrado: string = '';

  heroes: string[] = ['Spiderman', 'The Flash', 'Superman', 'Detective marciano', 'Capitan America'];

  borrandoHeroe() {
    this.borrado = this.heroes.shift() || '';
  }

}