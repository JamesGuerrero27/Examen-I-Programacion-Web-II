import { Component, OnInit } from '@angular/core';
import { Examen } from '../shared/model/examen';
import { ExamenMock } from '../shared/examen-mock';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  bibliotecaArr: Array<Examen>;
  selectCatalogo: Examen;
  constructor() { }

  ngOnInit() {
    this.bibliotecaArr = ExamenMock;
  }
  onSelect(biblioteca: Examen):void{
    this.selectCatalogo = biblioteca;
  }
backToMenu(){
this.selectCatalogo = null;
}
prestarLibro(){
  if(this.selectCatalogo.copiasDisponibles -= 1){

  }else if(this.selectCatalogo.copiasDisponibles === 0)
  {
    alert('No hay copias disponibles');
  }
  }
  devolverLibro(){
    if(this.selectCatalogo.copiasDisponibles +=1){

    } else if(this.selectCatalogo.copiasDisponibles === 10){
      alert("Ya estan todas las copias");

    }

  }
}

