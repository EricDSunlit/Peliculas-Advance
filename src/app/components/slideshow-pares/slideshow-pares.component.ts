import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../Interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @Input() peliculas:Pelicula[] = [];

  @Output() cargar = new EventEmitter

  slideOps = {
    slidesPerView: 3.3, 
    freeMode: true 
  }

  constructor(private modalController:ModalController) { 

  }

  ngOnInit() {

  }

  onClick() {
    this.cargar.emit();
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
