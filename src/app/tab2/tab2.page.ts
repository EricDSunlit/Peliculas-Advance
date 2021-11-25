import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../Interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  {

  textoABuscar:string = '';
  
  ideas:string[] = ['Spiderman','Batman','Avengers','Naruto','Code geass'];

  peliculas:Pelicula[]= [];

  constructor(private moviesServices: MoviesService, private modalController:ModalController) {
    
  }
  
  buscar( event ) {

    this.textoABuscar = event.detail.value; 
    if ( this.textoABuscar.length === 0){
      this.peliculas = [];
      return;
    }

    this.moviesServices.buscarPelis( this.textoABuscar ).subscribe({
      next: (resp) => { this.peliculas = resp['results'] },
      error: err => console.log('Ocurrico un error buscando pelis', err),
      complete: () => console.log('completado')
    })
  }

  async mostrarDetalle(id:number) {

    const modal = await this.modalController.create({
      component: DetalleComponent,
      componentProps: {
        id 
      }
    });

    modal.present();
  }


}