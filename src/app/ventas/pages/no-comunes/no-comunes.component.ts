import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent  {

  constructor() { }

  // i18nSelect
  nombre: string = 'Juan Camilo';
  genero: string = 'masculino';

  invitacionMap= {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria','Juan','Camilo','Mateo','Miguel','Oreo'];
  clientesMap ={
    '=0':'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarCliente(){
    if(this.nombre == 'Melissa')
    {
      this.nombre = 'Juan Camilo'
      this.genero = 'masculino'
    } else
    {
      this.nombre = 'Melissa';
      this.genero = 'femenino';
    }
  }

  BorrarCliente()
  {
      this.clientes.pop();
  }

  //KeyValue Pipe

  persona = {
    nombre: 'Juan',
    edad: 35,
    direccion: 'Medellín, Colombia'
  }

  //JsonPipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe

  miObservable = interval(2000); 

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });

}
