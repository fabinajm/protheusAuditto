import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstaladorComponent } from './instalador/instalador.component';
import { NfeComponent } from './nfe/nfe.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'instalador', component:InstaladorComponent },
  { path: 'nfe', component:NfeComponent },
  { path: 'home', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InstaladorComponent, NfeComponent, HomeComponent];
