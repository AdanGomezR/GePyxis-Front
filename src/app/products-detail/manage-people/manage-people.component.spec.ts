import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePeopleComponent } from './manage-people.component';

describe('ManagePeopleComponent', () => {
  let component: ManagePeopleComponent;
  let fixture: ComponentFixture<ManagePeopleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagePeopleComponent]
    });
    fixture = TestBed.createComponent(ManagePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
