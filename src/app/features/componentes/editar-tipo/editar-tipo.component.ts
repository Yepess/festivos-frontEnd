import { Component, OnInit } from '@angular/core';
import { TipoService } from '../../../core/servicios/tipo.service';
import { ActivatedRoute } from '@angular/router';
import { Tipo } from '../../../shared/entidades/tipo';

@Component({
  selector: 'app-editar-tipo',
  templateUrl: './editar-tipo.component.html',
  styleUrls: ['./editar-tipo.component.css']
})
export class EditarTipoComponent implements OnInit {
  tipo: Tipo | null = null;

  constructor(private tipoService: TipoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.tipoService.obtener(id).subscribe((tipo) => {
        this.tipo = tipo;
      });
    }
  }

  actualizarTipo(): void {
    if (this.tipo && this.tipo.nombre.trim()) {
      this.tipoService.modificar(this.tipo).subscribe(() => {
        alert('¡Tipo actualizado correctamente!');
      });
    } else {
      alert('El nombre del tipo no puede estar vacío.');
    }
  }
}
