import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorylistDashboardComponent } from './categorylist-dashboard.component';

describe('CategorylistDashboardComponent', () => {
  let component: CategorylistDashboardComponent;
  let fixture: ComponentFixture<CategorylistDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorylistDashboardComponent]
    });
    fixture = TestBed.createComponent(CategorylistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
