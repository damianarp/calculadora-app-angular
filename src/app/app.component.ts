import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'Aplicación de Calculadora';

  resultadoPadre: number;

  // tslint:disable-next-line: typedef
  onResultado(resultado: number) {
    this.resultadoPadre = resultado;
  }
}
