import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CochesComponent } from './coches/coches.component';
import { MotosComponent } from './motos/motos.component';
import { FurgonetasComponent } from './furgonetas/furgonetas.component';
import { TrenesComponent } from './trenes/trenes.component';
import { AvionesComponent } from './aviones/aviones.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CochesComponent,
    MotosComponent,
    FurgonetasComponent,
    TrenesComponent,
    AvionesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
