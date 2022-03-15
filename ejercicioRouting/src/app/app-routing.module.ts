import { NgModule } from '@angular/core';
import { CochesComponent } from './coches/coches.component';
import { MotosComponent } from './motos/motos.component';
import { AvionesComponent } from './aviones/aviones.component';
import { TrenesComponent } from './trenes/trenes.component';
import { RouterModule, Routes } from '@angular/router';
import { FurgonetasComponent } from './furgonetas/furgonetas.component';

const routes:Routes=[
  {
    path:'',
    component:CochesComponent,
    pathMatch:'full'
  },
  {
    path:'coches',
    component:CochesComponent,
  },
  {
    path:'motos',
    component:MotosComponent,
  },
  {
    path:'furgonetas',
    component:FurgonetasComponent,
  },
  {
    path:'aviones',
    component:AvionesComponent,
  },
  {
    path:'trenes',
    component:TrenesComponent,
  },
  {
    path:'**',
    redirectTo:''
  }
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
