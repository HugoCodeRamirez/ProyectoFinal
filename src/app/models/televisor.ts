export class Televisores {
    _id?: string;
    marca: string;
    tamanopantalla: string;
    tipopantalla: string;
    precio: number;

constructor (marca: string, tamanopantalla: string, tipopantalla: string, precio:number){
    this.marca = marca
    this.tamanopantalla = tamanopantalla
    this.tipopantalla = tipopantalla
    this.precio = precio
}


}