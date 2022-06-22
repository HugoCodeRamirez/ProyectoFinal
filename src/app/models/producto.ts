export class Producto{
    _id?:number;
    categoria:string;
    nombreProducto:string;
    marca:string;
    precio:number;

    constructor(categoria:string,nombreProducto:string,marca:string,precio:number)
    {
        this.categoria=categoria;
        this.nombreProducto=nombreProducto;
        this.marca=marca;
        this.precio=precio;
    }
}