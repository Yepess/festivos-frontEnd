import { Component, OnInit } from '@angular/core';
import { TipoService } from '../../../core/servicios/tipo.service';
import { Tipo } from '../../../shared/entidades/tipo';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {
  tipos: Tipo[] = [];

  constructor(private tipoService: TipoService) {}

  ngOnInit(): void {
    this.obtenerTipos();
  }

  obtenerTipos(): void {
    this.tipoService.obtenerTodos().subscribe((tipos: Tipo[]) => {
      this.tipos = tipos;
    });
  }
}