import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Festivo } from '../../shared/entidades/festivo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {
  private url = `${environment.urlService}festivo`;

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(this.url);
  }

  obtener(id: number): Observable<Festivo> {
    return this.http.get<Festivo>(`${this.url}/${id}`);
  }

  agregar(festivo: Festivo): Observable<Festivo> {
    return this.http.post<Festivo>(this.url, festivo);
  }

  modificar(festivo: Festivo): Observable<Festivo> {
    return this.http.put<Festivo>(`${this.url}/${festivo.id}`, festivo);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
