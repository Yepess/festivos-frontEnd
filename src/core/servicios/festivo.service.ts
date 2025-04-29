import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Festivo } from '../../shared/entidades/festivo';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {
  private apiUrl = `${environment.urlService}festivo`;

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(this.apiUrl);
  }

  obtener(id: number): Observable<Festivo> {
    return this.http.get<Festivo>(`${this.apiUrl}/${id}`);
  }

  agregar(festivo: Festivo): Observable<Festivo> {
    return this.http.post<Festivo>(this.apiUrl, festivo);
  }

  modificar(festivo: Festivo): Observable<Festivo> {
    return this.http.put<Festivo>(`${this.apiUrl}/${festivo.id}`, festivo);
  }

  eliminar(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}