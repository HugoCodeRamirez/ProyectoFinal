export class Contacto{
    _id?: string;
    correo: string;
    nombres: string;
    apellidos: string;
    contrasena: string;
    edad: number;

constructor(correo: string, nombres: string, apellidos: string, contrasena: string, edad: number){
    this.correo = correo
    this.nombres = nombres
    this.apellidos = apellidos
    this.contrasena = contrasena
    this.edad = edad
}

}