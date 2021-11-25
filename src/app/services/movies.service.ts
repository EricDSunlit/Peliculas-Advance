import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PeliculaDetalle, RespuestaMDB, RespuestaCredits, Pelicula } from '../Interfaces/interfaces';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // Controlar la pagina a la que accede el get
  private pagpopulares:number = 0 ; 

  constructor( private http:HttpClient) { }

  private ejecutarQuery<T>( query:string ) {
    query = URL + query; 
    query += `&api_key=${ apiKey }&language=es&include_image_language=es`;

    return this.http.get<T>( query );
  }

  getCartelera() {

    const hoy = new Date(); 
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() +1, 0).getDate();
    const mes = hoy.getMonth() + 1; 

    let mesString ; 

    if ( mes < 10 ) {
      mesString = '0' + mes 
    } else {
      mesString = mes
    }

    const FechaInicio = `${ hoy.getFullYear()}-${mesString}-01`;
    const FechaFinal = `${ hoy.getFullYear()}-${mesString}-${ ultimoDia }`

    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${ FechaInicio }&primary_release_date.lte=${ FechaFinal}`);

  }

  getPopulares() {

    this.pagpopulares++;

    const query = `/discover/movie?sort_by=popularity.desc&page=${this.pagpopulares}`;

    return this.ejecutarQuery<RespuestaMDB>( query );
  }

  getPeliculaDetalle( id:string ) {
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`) 
  }

  getActores( id:string ) {
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${ id }/credits?a=1`) 
  }

  buscarPelis(texto:string) {
    return this.ejecutarQuery<Pelicula>(`/search/movie?query=${ texto }`);
  } 
}
