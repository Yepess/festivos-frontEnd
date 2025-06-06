import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FestivoService } from '../../../core/servicios/festivo.service';
import { Festivo } from '../../../shared/entidades/festivo';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-festivo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-festivo.component.html',
  styleUrls: ['./crear-festivo.component.css']
})
export class CrearFestivoComponent {
 nuevoFestivo: Festivo = {
  id: 0,
  nombre: '',
  fecha: new Date(),
  dia: 0, 
  mes: 0, 
  diasPascua: 0,
  idTipo: 0 
};

  constructor(private festivoService: FestivoService, private router: Router) {}

  crearFestivo(): void {
  if (this.nuevoFestivo.nombre.trim()) {
    this.festivoService.agregar(this.nuevoFestivo).subscribe(() => {
      alert('¡Festivo creado correctamente!');
      this.nuevoFestivo = { 
        id: 0, 
        nombre: '', 
        fecha: new Date(), 
        dia: 0, 
        mes: 0, 
        diasPascua: 0, 
        idTipo: 0 
      };
      this.router.navigate(['/festivos']);
    });
  } else {
    alert('El nombre del festivo no puede estar vacío.');
  }
}
}
