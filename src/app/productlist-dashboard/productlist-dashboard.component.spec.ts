import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistDashboardComponent } from './productlist-dashboard.component';

describe('ProductlistDashboardComponent', () => {
  let component: ProductlistDashboardComponent;
  let fixture: ComponentFixture<ProductlistDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductlistDashboardComponent]
    });
    fixture = TestBed.createComponent(ProductlistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
