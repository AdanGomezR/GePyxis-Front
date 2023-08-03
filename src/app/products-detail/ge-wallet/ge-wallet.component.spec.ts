import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeWalletComponent } from './ge-wallet.component';

describe('GeWalletComponent', () => {
  let component: GeWalletComponent;
  let fixture: ComponentFixture<GeWalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeWalletComponent]
    });
    fixture = TestBed.createComponent(GeWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
