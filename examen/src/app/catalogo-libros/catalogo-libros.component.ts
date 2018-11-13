import { Component, OnInit } from '@angular/core';
import { Examen } from '../shared/model/examen';

@Component({
  selector: 'app-catalogo-libros',
  templateUrl: './catalogo-libros.component.html',
  styleUrls: ['./catalogo-libros.component.css']
})
export class CatalogoLibrosComponent implements OnInit {

  constructor() { }
  catalogosLibros: Examen;
  ngOnInit() {
  }

}
