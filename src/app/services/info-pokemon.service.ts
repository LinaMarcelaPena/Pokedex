// se comunica con la API
import { Injectable } from '@angular/core';
//trae la respuesta en formato Json
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPokemonService {

  private url: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http : HttpClient) { }

  // Declarando metodo
  getInfoPokemon(name: string){
    //se realiza la peticion get donde le pasamos la url de la API que se va a consumir 
    //y se le pasa el nombre del pokemon del que queremos recibir informacion esto concatena el nombre + url
    return this.http.get(`${this.url}/${name}`)
  }
}
