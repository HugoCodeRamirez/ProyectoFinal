import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  productoForm: FormGroup;

  regexNumero = /^[0-9]+$/;
  regexLetra = /^[a-zA-Z\s]+$/;

  constructor(private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      marca: ['', [Validators.required]],
      memoria: ['', [Validators.required]],
      ram: ['', [Validators.required]],
      precio: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  agregarProducto(){
    console.log(this.productoForm);
    console.log(this.productoForm.get('producto')?.value)
  }

}
