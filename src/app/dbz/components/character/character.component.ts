import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  /*
    Se utiliza principalmente para emitir eventos personalizados en componentes de Angular,
    permitiendo la comunicación entre un componente hijo y su componente padre o entre distintas partes de la aplicación.

    @Output: Define una salida del componente que el
    componente padre puede suscribirse para escuchar.

    - Se usa para establecer una comunicacion del componente hijo hacia el componente padre
   */
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {

    //debugger; // Con esta expresion lo que hacemos es que cuando se llegue a este punto en el navegador entremos al debugger del codigo

    console.log(this.character);
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};
  }
}
