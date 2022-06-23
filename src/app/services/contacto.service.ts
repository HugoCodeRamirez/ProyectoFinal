import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  url_api= 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  getContactos(): Observable<any>{
    return this.http.get(`${this.url_api}/contacto/obtener-listas-contactos`)
  }

  getContacto(id: string):Observable<any>{
    return this.http.get(`${this.url_api}/contacto/obtener-contacto/${id}`)
  }

  postContacto(contactoFormulario: Contacto): Observable<any>{
    return this.http.post(`${this.url_api}/contacto/crear-contacto`, contactoFormulario)
  }

  putContacto(id:any, contactoFormulario: Contacto):Observable<any>{
    return this.http.put(`${this.url_api}/contacto/actualizar-contacto/${id}`, contactoFormulario)
  }

  deleteContacto(id:string):Observable<any>{
    return this.http.delete(`${this.url_api}/contacto/borrar-contacto/${id}`)
  }

}
