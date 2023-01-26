import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class DBZListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()  //esto es que mi hijo va a recibir una property llamada characterList
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10
    }
  ]

  onDeleteCharacter( id: string): void{
    //TODO emitir el ID del personaje
    this.onDelete.emit(id);

  }
}
