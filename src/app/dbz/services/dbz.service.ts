
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({ //injectable es un decorador
  providedIn: 'root'
})

export class DBZService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilling',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 100000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    }
  ];

  addCharacter( character: Character): void{

    //Le agregamos el uuid cuando se crea un nuevo objeto
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power,
    // }

    //!Otra forma distinta de arriba de agregarle el uuid al objeto nuevo
    const newCharacter: Character = {
      id: uuid(),
       ...character
    };

    this.characters.push(character);
    console.log('todos los personajes', this.characters);

  }

  // onDeleteCharacter( index: number): void{

  //   //TODO emitir el ID del personaje
  //   console.log(index);
  //   this.characters.splice( index, 1 );
  // }

  deleteCharacterById( id: string): void{
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
