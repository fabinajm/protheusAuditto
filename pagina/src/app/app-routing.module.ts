import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { InstaladorComponent } from './instalador/instalador.component';
import { NfeComponent } from './nfe/nfe.component';
import { HomeComponent } from './home/home.component';
import { IntegradorComponent } from './integrador/integrador.component';
import { CadastrosComponent } from './cadastros/cadastros.component';

const routes: Routes = [
  { path: 'instalador', component:InstaladorComponent, data: { title: 'Instalador' }  },
  { path: '#peInstalado', component:InstaladorComponent, data: { title: 'Ponto de Entrada' }  },
  { path: 'nfe', component:NfeComponent, data: { title: 'NF-e' }  },
  { path: 'home', component:HomeComponent, pathMatch: 'prefix', data: { title: 'Home' }  },
  { path: 'cadastros', component:CadastrosComponent, data: { title: 'Cadastros' }  },
  { path: 'integrador', component:IntegradorComponent, data: { title: 'Integrador' }  }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: "enabled",
  onSameUrlNavigation: "reload",
  enableTracing: true,
  scrollPositionRestoration: "enabled"
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InstaladorComponent, NfeComponent, HomeComponent];

