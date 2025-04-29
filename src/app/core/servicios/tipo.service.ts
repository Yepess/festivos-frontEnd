import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Tipo } from '../../shared/entidades/tipo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  private url = `${environment.urlService}tipo`;

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(this.url);
  }

  obtener(id: number): Observable<Tipo> {
    return this.http.get<Tipo>(`${this.url}/${id}`);
  }

  agregar(tipo: Tipo): Observable<Tipo> {
    return this.http.post<Tipo>(this.url, tipo);
  }

  modificar(tipo: Tipo): Observable<Tipo> {
    return this.http.put<Tipo>(`${this.url}/${tipo.id}`, tipo);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
