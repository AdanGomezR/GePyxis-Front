import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselNosotrosSociosComponent } from './carrusel-nosotros-socios.component';

describe('CarruselNosotrosSociosComponent', () => {
  let component: CarruselNosotrosSociosComponent;
  let fixture: ComponentFixture<CarruselNosotrosSociosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarruselNosotrosSociosComponent]
    });
    fixture = TestBed.createComponent(CarruselNosotrosSociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
