import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule} from '@angular/material'; 
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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    routingComponents,
    HomeComponent,
    InstaladorComponent,
    IntegradorComponent,
    NfeComponent,
    CadastrosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
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
