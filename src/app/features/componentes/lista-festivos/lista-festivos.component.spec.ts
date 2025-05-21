import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaFestivosComponent } from './lista-festivos.component';
import { FestivoService } from '../../../core/servicios/festivo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('ListaFestivosComponent', () => {
  let component: ListaFestivosComponent;
  let fixture: ComponentFixture<ListaFestivosComponent>;
  let festivoServiceSpy: jasmine.SpyObj<FestivoService>;

  beforeEach(async () => {
    festivoServiceSpy = jasmine.createSpyObj('FestivoService', ['obtenerTodos', 'eliminar']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListaFestivosComponent],
      providers: [{ provide: FestivoService, useValue: festivoServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaFestivosComponent);
    component = fixture.componentInstance;

    festivoServiceSpy.obtenerTodos.and.returnValue(of([
      { id: 1, nombre: 'Navidad', fecha: new Date() },
      { id: 2, nombre: 'Año Nuevo', fecha: new Date() }
    ]));

    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe cargar los festivos correctamente', () => {
    expect(component.festivos.length).toBe(2);
  });

  it('debe eliminar un festivo correctamente', () => {
    component.eliminarFestivo(1);
    expect(component.festivos.length).toBe(1);
  });
});