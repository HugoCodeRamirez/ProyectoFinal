export class Computadores{
    _id?:number;
    marca:string;
    memoriaram:string;
    discosolido:string;
    precio:number;

    constructor(marca:string,memoriaram:string,discosolido:string,precio:number)
    {
        this.marca=marca;
        this.memoriaram=memoriaram;
        this.discosolido=discosolido;
        this.precio=precio;
    }
}