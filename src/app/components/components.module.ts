import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlidehowBackdropComponent } from './slidehow-backdrop/slidehow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { SwiperModule } from 'swiper/angular';




@NgModule({
  declarations: [SlidehowBackdropComponent, SlideshowPosterComponent, SlideshowParesComponent, DetalleComponent ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    SwiperModule
  ],
  exports: [
    SlidehowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent
  ],
  entryComponents: [
    DetalleComponent
  ]
})
export class ComponentsModule { }
