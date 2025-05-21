
import { Component } from '@angular/core';
import { TipoService } from '../../../core/servicios/tipo.service';
import { Tipo } from '../../../shared/entidades/tipo';

@Component({
  selector: 'app-crear-tipo',
  templateUrl: './crear-tipo.component.html',
  styleUrls: ['./crear-tipo.component.css']
})
export class CrearTipoComponent {
  nuevoTipo: Tipo = { id: 0, nombre: '' };

  constructor(private tipoService: TipoService) {}

  crearTipo(): void {
    if (this.nuevoTipo.nombre.trim()) {
      this.tipoService.agregar(this.nuevoTipo).subscribe(() => {
        alert('¡Tipo creado correctamente!');
        this.nuevoTipo = { id: 0, nombre: '' };
      });
    } else {
      alert('El nombre del tipo no puede estar vacío.');
    }
  }
}