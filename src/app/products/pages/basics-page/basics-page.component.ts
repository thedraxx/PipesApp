import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {

  public nameLower: string = 'fernando';
  public nameUpper: string = 'fernando';
  public fullName: string = 'fERnAnDo';

  public customDate: Date = new Date();

}
