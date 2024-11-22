import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  /* Para poder recibir informacion o una propiedad desde un componente padre, desde el mundo exterior
     Se debe usar el decorador @Input().
     Define una propiedad que puede ser enviada
    desde el padre hacia el componente hijo, en este caso recibimos la lista de characteres desde el componente main-page.

    - con este decorador le digo a mi componente ListComponent que puede recibir una propiedad llamada characterList
  */
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10
    }
  ]

  /* Creamos un Emiter para decirle al componente padre que elemento de la lista queremos borrar y el componente padre
      es el que se va a encargar de borrar el elemento de la lista con el index que le pasaremos desde este componente hijo
  */
  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  // Metodo que se dispara con el evento click de boton Eliminar
  onDeleteCharacter(id?: string): void {
    if(!id) return;
    this.onDeleteById.emit(id);
  }
 }
