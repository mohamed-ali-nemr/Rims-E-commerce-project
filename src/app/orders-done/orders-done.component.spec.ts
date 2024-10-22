import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDoneComponent } from './orders-done.component';

describe('OrdersDoneComponent', () => {
  let component: OrdersDoneComponent;
  let fixture: ComponentFixture<OrdersDoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersDoneComponent]
    });
    fixture = TestBed.createComponent(OrdersDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
