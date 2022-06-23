export class Camaras{
    _id?:number;
    marca:string;
    tipodecamara:string;
    resolucion:string;
    precio:number;

    constructor(marca:string,tipodecamara:string,resolucion:string,precio:number)
    {
        this.marca=marca;
        this.tipodecamara=tipodecamara;
        this.resolucion=resolucion;
        this.precio=precio;
    }
}