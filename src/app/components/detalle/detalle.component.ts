import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../Interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  pelicula:PeliculaDetalle;
  ocultar = 150;
  actores: Cast[] = [];

  actoresSlideOps = {
    slidesPerView: 3.3, 
    freeMode: true, 
    spacebetween: -5
  }

  constructor( private moviesService:MoviesService, private modalController:ModalController) { }

  ngOnInit() {
    this.moviesService.getPeliculaDetalle(this.id).subscribe( resp => {
      // console.log('resp', resp);
      this.pelicula = resp;
    });

    this.moviesService.getActores(this.id).subscribe( resp => {
      //  console.log('resp', resp);
      this.actores = resp.cast;
    });
  }

  atras() {
    this.modalController.dismiss();
  }

  favorito() {
    console.log('Añadir a favorito') 
  }

}
