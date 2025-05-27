import { Component, OnInit } from '@angular/core';
import { FestivoService } from '../../../core/servicios/festivo.service';
import { Festivo } from '../../../shared/entidades/festivo';

@Component({
  selector: 'app-festivo',
  templateUrl: './festivo.component.html',
  styleUrls: ['./festivo.component.css']
})
export class FestivoComponent implements OnInit {
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

  formatearFecha(fecha: Date | null): string {
    return fecha ? fecha.toLocaleDateString('es-ES') : 'Sin fecha'; 
  }
}
