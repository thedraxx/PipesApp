import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
})
export class UncommonPageComponent {

  //I18nSelectPipe
  public name: string = "Fernando";
  public gender: 'male' | 'famale' = "male";
  public invitationMap = { male: "invitarlo", famale: "invitarla" }

  public changeClient(): void {
    this.name = "melisa"
    this.gender = "famale"
  }

  // I18nPluralPipe
  public clients: string[] = ["maria", "fernando", "Hernan", "Pedro"]
  public clientsMap = {
    "=0": "ningun cliente esperando",
    "other": "# clientes esperando",
  }

  public deleteClient(): void {
    this.clients.shift();
  }


  // KeyValuePipe
  public person = {
    name: "fernando",
    age: 23,
    adress: "okinawa"
  }

  //AsyncPipe
  public myObservableTimer = interval(2000).pipe(tap(value => {
    console.log('tap', value)
  }))

  public promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("tenemos data en la promesa");
      console.log("tenemos data en la primersa ")
      this.person.name = "otro nombre"
    }, 5000);
  })
}
