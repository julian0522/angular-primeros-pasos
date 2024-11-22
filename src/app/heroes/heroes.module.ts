import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Componentes
import { HeroComponent } from "./hero/hero.component";
import { ListHeroComponent } from "./list/list.component";



@NgModule({
  declarations:[
    HeroComponent,
    ListHeroComponent
  ],
  exports:[
    HeroComponent,
    ListHeroComponent
  ],
  imports:[ // Se debe importar las dependencias que nuestro modulo necesite por eso importamos este modulo si no no funcionaria el ng-If
    CommonModule,
  ]
})
export class HeroesModule{}
