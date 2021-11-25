import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../../Interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slidehow-backdrop',
  templateUrl: './slidehow-backdrop.component.html',
  styleUrls: ['./slidehow-backdrop.component.scss'],
})
export class SlidehowBackdropComponent implements OnInit {

  @Input() peliculas:Pelicula[] = [];

  slideOps = {
    slidesPerView: 1.1, 
    freeMode: true 
  }
  
  constructor( private modalController:ModalController) { }

  ngOnInit() {}

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
