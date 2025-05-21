
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearTipoComponent } from './crear-tipo.component';
import { TipoService } from '../../../core/servicios/tipo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CrearTipoComponent', () => {
  let component: CrearTipoComponent;
  let fixture: ComponentFixture<CrearTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CrearTipoComponent],
      providers: [TipoService]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe inicializar `nuevoTipo` correctamente', () => {
    expect(component.nuevoTipo).toEqual({ id: 0, nombre: '' });
  });

  it('debe llamar `crearTipo` y resetear el campo', () => {
    component.nuevoTipo.nombre = 'Ejemplo';
    component.crearTipo();
    expect(component.nuevoTipo.nombre).toBe('');
  });
});