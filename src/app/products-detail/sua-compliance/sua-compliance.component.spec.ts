import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaComplianceComponent } from './sua-compliance.component';

describe('SuaComplianceComponent', () => {
  let component: SuaComplianceComponent;
  let fixture: ComponentFixture<SuaComplianceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuaComplianceComponent]
    });
    fixture = TestBed.createComponent(SuaComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
