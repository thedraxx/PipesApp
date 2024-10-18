import { Component } from '@angular/core';
import { Color, Hero } from '../../interface/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | null = 'canFly';

  public heroes: Hero[] = [
    {
      name: "superman",
      canFly: true,
      color: Color.blue
    },
    {
      name: "batman",
      canFly: false,
      color: Color.black
    },
    {
      name: "wonder woman",
      canFly: true,
      color: Color.red
    },
    {
      name: "IronMan",
      canFly: false,
      color: Color.green
    }
  ]

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value
  }

}
