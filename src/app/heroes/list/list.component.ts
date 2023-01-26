import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Hulk','Batman','Thor','Superman'];
  public lastHeroDeleted: string = '';


  public deleteLastHero(): void{
    this.lastHeroDeleted = this.heroNames.pop() || '';
  }

}
