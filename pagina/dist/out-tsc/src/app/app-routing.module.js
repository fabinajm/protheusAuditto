import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InstaladorComponent } from './instalador/instalador.component';
import { ConfiguradorComponent } from './configurador/configurador.component';
import { NfeComponent } from './nfe/nfe.component';
const routes = [
    { path: 'instalador', component: InstaladorComponent },
    { path: 'configurador', component: ConfiguradorComponent },
    { path: 'nfe', component: NfeComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
export const routingComponents = [InstaladorComponent, ConfiguradorComponent, NfeComponent];
//# sourceMappingURL=app-routing.module.js.map