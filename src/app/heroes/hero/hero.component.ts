import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string{

    return this.name.toUpperCase();
  }

  public description(): string{

    return `Los datos de esta persona es: nombre: ${this.name} con ${this.age} años`;
  }

  public changeHero():void {
    this.name = 'Spiderman'
  }

  public changeAge(): void{
    this.age = 20;
  }

  public resetForm(): void{
    this.name = 'ironman';
    this.age = 45
  }



}
