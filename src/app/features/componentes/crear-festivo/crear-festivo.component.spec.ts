import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearFestivoComponent } from './crear-festivo.component';
import { FestivoService } from '../../../core/servicios/festivo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CrearFestivoComponent', () => {
  let component: CrearFestivoComponent;
  let fixture: ComponentFixture<CrearFestivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CrearFestivoComponent],
      providers: [FestivoService]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearFestivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

it('debe inicializar `nuevoFestivo` correctamente', () => {
  expect(component.nuevoFestivo).toEqual({ 
    id: 0, 
    nombre: '', 
    fecha: jasmine.any(Date), 
    dia: 0, 
    mes: 0, 
    diasPascua: 0, 
    idTipo: 0 
  });
});

  it('debe llamar `crearFestivo` y resetear los campos', () => {
    component.nuevoFestivo.nombre = 'Ejemplo';
    component.crearFestivo();
    expect(component.nuevoFestivo.nombre).toBe('');
  });
});
