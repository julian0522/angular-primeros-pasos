import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

/*Se debe tener cuidado al usar codigo propiamente de javascript ya que de esta manera el ciclo de deteccion
    de cambios no funcionara con ese codigo, se debe usar el codigo dentro de las clases usando las propiedades
    mediante los metodos de las clases
*/
export class HeroComponent {
  public name: string = 'ironMan';
  public age: number = 45;

  // Los métodos get y set se utilizan como propiedades en muchos lenguajes orientados a objetos
    // Realmente es un metodo de clase pero que se usa como propiedad
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescripcion(): string {
    return `${this.name.toUpperCase()} - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 30;
  }

  resetForm(): void{
    this.name = 'ironMan';
    this.age = 45;
  }
}
