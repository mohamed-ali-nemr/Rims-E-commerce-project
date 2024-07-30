import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistDashboardComponent } from './userlist-dashboard.component';

describe('UserlistDashboardComponent', () => {
  let component: UserlistDashboardComponent;
  let fixture: ComponentFixture<UserlistDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserlistDashboardComponent]
    });
    fixture = TestBed.createComponent(UserlistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
