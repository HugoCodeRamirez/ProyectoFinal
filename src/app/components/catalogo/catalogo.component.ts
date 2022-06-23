import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';

import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  listProductos: Producto[] = [];

  constructor(private _productoService: ProductosService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this._productoService.getProductos().subscribe(data =>{
      console.log(data);
      this.listProductos = data; //guardamos en el atributo de la clase  la data recibida de la BD
    },error => {
      console.log(error)
    }
    )
  }

}
