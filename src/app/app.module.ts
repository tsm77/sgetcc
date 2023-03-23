import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './module/usuario/formulario/formulario.component';
import { TelaLoginComponent } from './module/login/tela-login/tela-login.component';
import { PRIMENG_IMPORTS } from './shared/primeng-imports';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TelaLoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PRIMENG_IMPORTS,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
