import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FestivoComponent } from './festivos.component';
import { FestivoService } from '../../../core/servicios/festivo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('FestivoComponent', () => {
  let component: FestivoComponent;
  let fixture: ComponentFixture<FestivoComponent>;
  let festivoServiceSpy: jasmine.SpyObj<FestivoService>;

  beforeEach(async () => {
    festivoServiceSpy = jasmine.createSpyObj('FestivoService', ['obtenerTodos']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FestivoComponent],
      providers: [{ provide: FestivoService, useValue: festivoServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(FestivoComponent);
    component = fixture.componentInstance;

    festivoServiceSpy.obtenerTodos.and.returnValue(of([
      { id: 1, nombre: 'Navidad', fecha: new Date(), dia: 25, mes: 12, diasPascua: 0, idTipo: 1 },
      { id: 2, nombre: 'Año Nuevo', fecha: new Date(), dia: 1, mes: 1, diasPascua: 0, idTipo: 2 }
    ]));

    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe cargar los festivos correctamente', () => {
    expect(component.festivos.length).toBe(2);
  });
});