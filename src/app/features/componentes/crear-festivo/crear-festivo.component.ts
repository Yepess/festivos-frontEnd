import { Component } from '@angular/core';
import { FestivoService } from '../../../core/servicios/festivo.service';
import { Festivo } from '../../../shared/entidades/festivo';

@Component({
  selector: 'app-crear-festivo',
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

  constructor(private festivoService: FestivoService) {}

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
    });
  } else {
    alert('El nombre del festivo no puede estar vacío.');
  }
}
}
