import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicación de Calculadora';
  operandoA:number;
  operandoB:number;
  resultado:number;

  onSumar():void{
    this.resultado = this.operandoA + this.operandoB;
  }
}
