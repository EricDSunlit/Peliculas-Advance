import { Component, OnInit } from '@angular/core';
import { Pelicula, RespuestaMDB } from '../Interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];


  constructor( private moviesService:MoviesService) {}

  ngOnInit (){
    this.moviesService.getCartelera().subscribe( resp => {

      // console.log("respuesta", resp)
      this.peliculasRecientes = resp.results;

    });

    this.getPop()

  }

  cargar () {
    this.getPop()
  }

  getPop() {
    this.moviesService.getPopulares().subscribe( resp => {
      // this.populares = resp.results;
      const arrTemp = [...this.populares, ...resp.results]
      this.populares = arrTemp;
      // this.populares.push(... resp.results);
    });
  }


}
