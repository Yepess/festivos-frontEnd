import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFestivoComponent } from './editar-festivo.component';

describe('EditarFestivoComponent', () => {
  let component: EditarFestivoComponent;
  let fixture: ComponentFixture<EditarFestivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarFestivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFestivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
