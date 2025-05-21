import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarFestivoComponent } from './editar-festivo.component';
import { FestivoService } from '../../../core/servicios/festivo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('EditarFestivoComponent', () => {
  let component: EditarFestivoComponent;
  let fixture: ComponentFixture<EditarFestivoComponent>;
  let festivoServiceSpy: jasmine.SpyObj<FestivoService>;

  beforeEach(async () => {
    festivoServiceSpy = jasmine.createSpyObj('FestivoService', ['obtener', 'actualizar']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [EditarFestivoComponent],
      providers: [
        { provide: FestivoService, useValue: festivoServiceSpy },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarFestivoComponent);
    component = fixture.componentInstance;

    festivoServiceSpy.obtener.and.returnValue(
  of({ id: 1, nombre: 'Navidad', fecha: new Date(), dia: 25, mes: 12, diasPascua: 0, idTipo: 1 })
);
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe cargar el festivo correctamente', () => {
    expect(component.festivo).toEqual(jasmine.objectContaining({ id: 1, nombre: 'Navidad' }));
  });

  it('debe llamar `actualizarFestivo` correctamente', () => {
    component.festivo!.nombre = 'Año Nuevo';
    component.actualizarFestivo();
    expect(festivoServiceSpy.modificar).toHaveBeenCalled();
  });
});
