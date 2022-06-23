import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputadoresService {

  url = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any>{
    return this.http.get(`${this.url}`);
  }

  deleteProducto(id:string): Observable<any>{
    return this.http.delete(this.url + id)
  }
}
