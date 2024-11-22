import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <hr>
    <h3>Counter: {{counter}}</h3>

    <button (click)="incrementar(1)">+1</button> <!--De esta manera llamamos un metodo en el evento click del boton para que ejecute codigo-->
    <button (click)="incrementar(-1)">-1</button>
    <button (click)="reset()">Reset</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  incrementar( value: number):void {
    this.counter += value;
  }

  // De esta manera creamos metodos que luego llamamos en el html para que hagan acciones en el componeente
  reset():void {
    this.counter = 10;
  }

}
