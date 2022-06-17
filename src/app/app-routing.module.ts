import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [

{path: '', component: HomeComponent},
{path: 'carro-de-compras', component: CarritoComprasComponent},
{path: 'catalogo', component: CatalogoComponent},
{path: 'login', component: LoginComponent},
{path: 'formproducto', component: CrearProductoComponent},
{path: '404', component: NotFoundComponent},

{path: '**', redirectTo: '404', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
