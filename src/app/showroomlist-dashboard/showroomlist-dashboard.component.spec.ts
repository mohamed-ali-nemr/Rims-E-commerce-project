import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomlistDashboardComponent } from './showroomlist-dashboard.component';

describe('ShowroomlistDashboardComponent', () => {
  let component: ShowroomlistDashboardComponent;
  let fixture: ComponentFixture<ShowroomlistDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowroomlistDashboardComponent]
    });
    fixture = TestBed.createComponent(ShowroomlistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
