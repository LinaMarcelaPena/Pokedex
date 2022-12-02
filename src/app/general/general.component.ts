import { Component, OnInit } from '@angular/core';
import { InfoPokemonService } from '../services/info-pokemon.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  name!: string;
  urlImage!: string;

  // La inyeccion de dependencias evita el uso de operador new 
  //private InfoPokemonService infoPokemonService = new InfoPokemonService();
 // traer una instancia de service que permite utilizar el metodo get que se creo en el service
  constructor (private infoPokemonService : InfoPokemonService) { }

  ngOnInit(): void {
    
  }
 // al dar clic en boton buscar, se envia el nombre que se ingreso en el input que se encuentra en la variable name 
 //la instacia permite comunicarnos con service que va a usar el metodo get para contestar la peticion 
 //llevando informacion requerida
  search(){
    //La instancia que se creo va a utilizar el metodo y le va a pasar un parametro   
    this.infoPokemonService.getInfoPokemon(this.name).subscribe ((data:any) => {
      this.urlImage = data.sprites.front_default
    })
  }

}
