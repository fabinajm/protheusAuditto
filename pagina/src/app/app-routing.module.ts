import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { InstaladorComponent } from './instalador/instalador.component';
import { HomeComponent } from './home/home.component';
import { InstPreReqComponent } from './inst-pre-req/inst-pre-req.component';
import { ConfAudtComponent } from './conf-audt/conf-audt.component';
import { ConfProtComponent } from './conf-prot/conf-prot.component';
import { ConfFinComponent } from './conf-fin/conf-fin.component';
import { ConfPtoEntComponent } from './conf-pto-ent/conf-pto-ent.component';
import { DnfProcComponent } from './dnf-proc/dnf-proc.component';
import { DnfCadComponent } from './dnf-cad/dnf-cad.component';
import { DnfEntComponent } from './dnf-ent/dnf-ent.component';
import { ConvNfeComponent } from './conv-nfe/conv-nfe.component';
import { ConvCteComponent } from './conv-cte/conv-cte.component';
import { NfsProcComponent } from './nfs-proc/nfs-proc.component';
import { NfsCadComponent } from './nfs-cad/nfs-cad.component';
import { NfsEntComponent } from './nfs-ent/nfs-ent.component';
import { NfsConvComponent } from './nfs-conv/nfs-conv.component';
import { NdProcComponent } from './nd-proc/nd-proc.component';
import { NdEntComponent } from './nd-ent/nd-ent.component';
import { AprProcComponent } from './apr-proc/apr-proc.component';
import { AprCruzComponent } from './apr-cruz/apr-cruz.component';

const routes: Routes = [
  { path: 'instalador', component: InstaladorComponent, data: { title: 'Instalação - Instalador' } },
  { path: '#peInstalado', component: InstaladorComponent, data: { title: 'Ponto de Entrada' } },
  { path: 'home', component: HomeComponent, pathMatch: 'prefix', data: { title: 'Home' } },
  { path: 'instPreReq', component: InstPreReqComponent, data: { title: 'Instalação - Pré-requisitos' } },
  { path: 'confAudt', component: ConfAudtComponent, data: { title: 'Configuração - Auditto' } },
  { path: 'confProt', component: ConfProtComponent, data: { title: 'Configuração - Protheus' } },
  { path: 'confPtoEnt', component: ConfPtoEntComponent, data: { title: 'Configuração - Pontos de Entrada' } },
  { path: 'confFin', component: ConfFinComponent, data: { title: 'Configuração - Financeiro' } },
  { path: 'dnfProc', component: DnfProcComponent, data: { title: 'Danfe - Processo' } },
  { path: 'dnfCad', component: DnfCadComponent, data: { title: 'Danfe - Cadastros' } },
  { path: 'dnfEnt', component: DnfEntComponent, data: { title: 'Danfe - Entrada NFE/CTE' } },
  { path: 'convNfe', component: ConvNfeComponent, data: { title: 'Danfe - Conversão NFE' } },
  { path: 'convCte', component: ConvCteComponent, data: { title: 'Danfe - Conversão CTE' } },
  { path: 'nfsProc', component: NfsProcComponent, data: { title: 'NFS-e - Processo' } },
  { path: 'nfsCad', component: NfsCadComponent, data: { title: 'NFS-e - Cadastros' } },
  { path: 'nfsEnt', component: NfsEntComponent, data: { title: 'NFS-e - Entrada' } },
  { path: 'nfsConv', component: NfsConvComponent, data: { title: 'NFS-e - Conversão' } },
  { path: 'ndProc', component: NdProcComponent, data: { title: 'ND - Processo' } },
  { path: 'ndEnt', component: NdEntComponent, data: { title: 'ND - Entrada' } },
  { path: 'aprProc', component: AprProcComponent, data: { title: 'Apuração - Processo' } },
  { path: 'aprCruz', component: AprCruzComponent, data: { title: 'Apuração - Cruzamento' } }
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
export const routingComponents = [InstaladorComponent, HomeComponent, InstPreReqComponent, ConfAudtComponent, ConfProtComponent, ConfPtoEntComponent, DnfProcComponent, DnfCadComponent, DnfEntComponent, ConvNfeComponent, ConvCteComponent, NfsProcComponent, NfsCadComponent, NfsEntComponent, NfsConvComponent, NdProcComponent, NdEntComponent, AprProcComponent, AprCruzComponent];

