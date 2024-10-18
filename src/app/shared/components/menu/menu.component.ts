import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  public menuItems: MenuItem[] = []

  ngOnInit() {

    this.menuItems =
      [
        {
          label: 'Pipes de angular',
          icon: "pi pi-desktop",
          "items": [
            {
              label: "Textos y fechas",
              icon: "pi pi-align-left",
              url: ""
            },
            {
              label: "Numeros",
              icon: "pi pi-dollar",
              url: "numbers"
            },
            {
              label: "No comunes",
              icon: "pi pi-globe",
              url: "uncommon"
            },
          ]
        },
        {
          label: "pipes personalizados",
          icon: "pi pi-cog",
          items: [{
            label: "CustomPipes",
            icon: "pi pi-cog",
            url: "custom"
          }]
        }
      ]
  }

}
