import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceOrderComponent } from './maintenance-order.component';

describe('MaintenanceOrderComponent', () => {
  let component: MaintenanceOrderComponent;
  let fixture: ComponentFixture<MaintenanceOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintenanceOrderComponent]
    });
    fixture = TestBed.createComponent(MaintenanceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
