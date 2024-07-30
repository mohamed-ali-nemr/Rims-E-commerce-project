import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenceorderlistDashboardComponent } from './maintenceorderlist-dashboard.component';

describe('MaintenceorderlistDashboardComponent', () => {
  let component: MaintenceorderlistDashboardComponent;
  let fixture: ComponentFixture<MaintenceorderlistDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintenceorderlistDashboardComponent]
    });
    fixture = TestBed.createComponent(MaintenceorderlistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
