import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OracleEbsComponent } from './oracle-ebs.component';

describe('OracleEbsComponent', () => {
  let component: OracleEbsComponent;
  let fixture: ComponentFixture<OracleEbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OracleEbsComponent]
    });
    fixture = TestBed.createComponent(OracleEbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
