import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];
  heroesBorrados: string = '';

  borrarHeroe() {
    this.heroesBorrados = this.heroes.shift()  || '';
  }

}
