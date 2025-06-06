import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FestivoService } from '../../../core/servicios/festivo.service';
import { Festivo } from '../../../shared/entidades/festivo';

@Component({
  selector: 'app-festivo',
  templateUrl: './festivos.component.html',
  styleUrls: ['./festivos.component.css']
})
export class FestivoComponent implements OnInit {
  festivos: Festivo[] = [];

  constructor(private festivoService: FestivoService, private router: Router) {}

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

  irCrearFestivo(): void {
    this.router.navigate(['/crear-festivo']);
  }

  irEditarFestivo(id: number): void {
    this.router.navigate(['/editar-festivo', id]);
  }

  eliminarFestivo(id: number): void {
    if (confirm('¿Estás seguro de eliminar este festivo?')) {
      this.festivoService.eliminar(id).subscribe(() => {
        this.obtenerFestivos();
      });
    }
  }
}
