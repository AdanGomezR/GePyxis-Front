import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselNosotros1Component } from './carrusel-nosotros1.component';

describe('CarruselNosotros1Component', () => {
  let component: CarruselNosotros1Component;
  let fixture: ComponentFixture<CarruselNosotros1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarruselNosotros1Component]
    });
    fixture = TestBed.createComponent(CarruselNosotros1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
