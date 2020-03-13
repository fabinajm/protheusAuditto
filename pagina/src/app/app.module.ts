import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { InstaladorComponent } from './instalador/instalador.component';
import { IntegradorComponent } from './integrador/integrador.component';
import { NfeComponent } from './nfe/nfe.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { NfsComponent } from './nfs/nfs.component';
import { Menu2Component } from './menu2/menu2.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {DragDropModule} from '@angular/cdk/drag-drop';

/**
 * NgModule that includes all Material modules.
*/
@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    // Material
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    routingComponents,
    HomeComponent,
    InstaladorComponent,
    IntegradorComponent,
    NfeComponent,
    CadastrosComponent,
    NfsComponent,
    Menu2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    NgxPageScrollModule,
    TextareaAutosizeModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
