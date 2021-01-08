import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() resultadoSuma = new EventEmitter<number>();
  operandoA: number;
  operandoB: number;

  constructor() { }

  ngOnInit(): void {
  }

  onSumar(): void{
    const resultado = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(resultado);
  }

}
