import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListHeroComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Shehulk', 'thor'];
  public deletedHero?:string;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }
}
