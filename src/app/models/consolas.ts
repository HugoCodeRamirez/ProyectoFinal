export class Consolas{
    _id?: string;
    marca: string;
    tipodecontroles: string;
    controlesincluidos: string;
    precio: number;

constructor (marca: string, tipodecontroles: string, controlesincluidos: string, precio: number){
    this.marca = marca
    this.tipodecontroles = tipodecontroles
    this.controlesincluidos = controlesincluidos
    this.precio = precio
}
}