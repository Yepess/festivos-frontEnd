import { Component, OnInit } from '@angular/core';
import { FestivoService } from '../../../core/servicios/festivo.service';
import { ActivatedRoute } from '@angular/router';
import { Festivo } from '../../../shared/entidades/festivo';

@Component({
  selector: 'app-editar-festivo',
  templateUrl: './editar-festivo.component.html',
  styleUrls: ['./editar-festivo.component.css']
})
export class EditarFestivoComponent implements OnInit {
  festivo: Festivo | null = null;

  constructor(private festivoService: FestivoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.festivoService.obtener(id).subscribe((festivo) => {
        this.festivo = festivo;
      });
    }
  }

  actualizarFestivo(): void {
    if (this.festivo && this.festivo.nombre.trim()) {
        this.festivoService.modificar(this.festivo).subscribe(() => {
  alert('¡Festivo actualizado correctamente!');
});
    } else {
      alert('El nombre del festivo no puede estar vacío.');
    }
  }

}