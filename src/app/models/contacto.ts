export class Contacto{
    _id?: string;
    correo: string;
    nombres: string;
    apellidos: string;
    contraseña: string;
    edad: number;

constructor(correo: string, nombres: string, apellidos: string, contraseña: string, edad: number){
    this.correo = correo
    this.nombres = nombres
    this.apellidos = apellidos
    this.contraseña = contraseña
    this.edad = edad
}

}