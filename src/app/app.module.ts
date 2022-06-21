import { NgModule } from '@angular/core';
import  { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CarritoComprasComponent,
    CatalogoComponent,
    DashboardComponent,
    NotFoundComponent,
    CrearProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
