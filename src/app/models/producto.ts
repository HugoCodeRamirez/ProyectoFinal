export class Producto{
    _id?:number;
    marca:string;
    memoriainterna:string;
    memoriaram:string;
    precio:number;

    constructor(marca:string,memoriainterna:string,memoriaram:string,precio:number)
    {
        this.marca=marca;
        this.memoriainterna=memoriainterna;
        this.memoriaram=memoriaram;
        this.precio=precio;
    }
}