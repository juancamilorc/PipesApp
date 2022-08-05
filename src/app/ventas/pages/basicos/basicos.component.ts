import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {

  nombreLower: string = 'juan camilo'
  nombreUpper: string = 'JUAN CAMILO'
  nombreCompleto: string = 'juaN caMiLo'
  
  fecha: Date = new Date();
}
