import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarTipoComponent } from './editar-tipo.component';
import { TipoService } from '../../../core/servicios/tipo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('EditarTipoComponent', () => {
  let component: EditarTipoComponent;
  let fixture: ComponentFixture<EditarTipoComponent>;
  let tipoServiceSpy: jasmine.SpyObj<TipoService>;

  beforeEach(async () => {
    tipoServiceSpy = jasmine.createSpyObj('TipoService', ['obtener', 'modificar']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [EditarTipoComponent],
      providers: [
        { provide: TipoService, useValue: tipoServiceSpy },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarTipoComponent);
    component = fixture.componentInstance;

    tipoServiceSpy.obtener.and.returnValue(of({ id: 1, nombre: 'Ejemplo' }));

    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe cargar el tipo correctamente', () => {
    expect(component.tipo).toEqual(jasmine.objectContaining({ id: 1, nombre: 'Ejemplo' }));
  });

  it('debe llamar `actualizarTipo` correctamente', () => {
    component.tipo!.nombre = 'Nuevo Tipo';
    component.actualizarTipo();
    expect(tipoServiceSpy.modificar).toHaveBeenCalled();
  });
});
