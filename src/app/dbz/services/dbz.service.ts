import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'

})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 2000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter( character: Character): void {
    // Usamos el operador express para decirle que tome todas las propiedades de character y las esparsa en el nuevo elemento que estamos creando
    const newCharacter: Character = {id: uuid(), ...character}
    this.characters.push(newCharacter);
  }

  // Se Crea un metodo para eliminar un personaje de la lista que recibe el index desde el componente hijo ListComponent
  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id:string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }


}
