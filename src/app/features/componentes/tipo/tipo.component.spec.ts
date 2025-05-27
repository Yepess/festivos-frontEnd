import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoComponent } from './tipo.component';
import { TipoService } from '../../../core/servicios/tipo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('TipoComponent', () => {
  let component: TipoComponent;
  let fixture: ComponentFixture<TipoComponent>;
  let tipoServiceSpy: jasmine.SpyObj<TipoService>;

  beforeEach(async () => {
    tipoServiceSpy = jasmine.createSpyObj('TipoService', ['obtenerTodos']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TipoComponent],
      providers: [{ provide: TipoService, useValue: tipoServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(TipoComponent);
    component = fixture.componentInstance;

    tipoServiceSpy.obtenerTodos.and.returnValue(of([
      { id: 1, nombre: 'Festivo Nacional' },
      { id: 2, nombre: 'Festivo Regional' }
    ]));

    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe cargar los tipos correctamente', () => {
    expect(component.tipos.length).toBe(2);
  });
});