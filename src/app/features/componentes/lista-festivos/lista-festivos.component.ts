import { Component, OnInit } from '@angular/core';
import { FestivoService } from '../../../core/servicios/festivo.service';
import { Festivo } from '../../../shared/entidades/festivo';

@Component({
  selector: 'app-lista-festivos',
  templateUrl: './lista-festivos.component.html',
  styleUrls: ['./lista-festivos.component.css']
})
export class ListaFestivosComponent implements OnInit {
  festivos: Festivo[] = [];

  constructor(private festivoService: FestivoService) {}

  ngOnInit(): void {
    this.obtenerFestivos();
  }

  obtenerFestivos(): void {
    this.festivoService.obtenerTodos().subscribe((festivos: Festivo[]) => {
      this.festivos = festivos.map(f => ({
        ...f,
        fecha: f.fecha ? new Date(f.fecha) : null 
      }));
    });
  }

  eliminarFestivo(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este festivo?')) {
      this.festivoService.eliminar(id).subscribe(() => {
        this.festivos = this.festivos.filter(festivo => festivo.id !== id);
      });
    }
  }

  formatearFecha(fecha: Date | null): string {
    return fecha ? fecha.toLocaleDateString('es-ES') : 'Sin fecha'; 
  }
}

