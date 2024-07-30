import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlistDashboardComponent } from './orderlist-dashboard.component';

describe('OrderlistDashboardComponent', () => {
  let component: OrderlistDashboardComponent;
  let fixture: ComponentFixture<OrderlistDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderlistDashboardComponent]
    });
    fixture = TestBed.createComponent(OrderlistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
