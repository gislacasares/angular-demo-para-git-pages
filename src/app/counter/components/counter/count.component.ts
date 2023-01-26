import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }} </h3>

    <button (click)="increaseBy(+1)" >+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
  `
})

export class CounterComponent {
  public counter: number = 1;

  public increaseBy( value: number): void{
    if( this.counter > 0 ){
      this.counter += value;
    }
  }

  public resetCounter(): void{
    this.counter = 1;
  }

}

