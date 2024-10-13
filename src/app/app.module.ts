import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
//Configuracion Local
import { registerLocaleData } from '@angular/common';
import  ("@angular/common/locales/es-AR").then(module => registerLocaleData(module.default));




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {provide: LOCALE_ID,useValue: "es-AR"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
