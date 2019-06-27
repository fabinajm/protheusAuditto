import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstaladorComponent } from './instalador/instalador.component';
import { ConfiguradorComponent } from './configurador/configurador.component';
import { NfeComponent } from './nfe/nfe.component';

const routes: Routes = [
  { path: 'instalador', component:InstaladorComponent },
  { path: 'configurador', component:ConfiguradorComponent },
  { path: 'nfe', component:NfeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InstaladorComponent, ConfiguradorComponent, NfeComponent];
