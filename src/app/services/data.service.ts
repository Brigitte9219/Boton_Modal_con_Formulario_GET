import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  obtenerDatosPorId(id: string): Observable<any> {
    return this.http.get<any>(`https://65e7b8b653d564627a8f2cfe.mockapi.io/Devgirl/order/${id}`);
  }

  guardarDatos(datos: any): Observable<any> {
    return this.http.post<any>('https://65e7b8b653d564627a8f2cfe.mockapi.io/Devgirl/order', datos);
  }

}
