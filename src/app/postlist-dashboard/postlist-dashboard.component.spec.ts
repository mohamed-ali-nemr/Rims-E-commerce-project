import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlistDashboardComponent } from './postlist-dashboard.component';

describe('PostlistDashboardComponent', () => {
  let component: PostlistDashboardComponent;
  let fixture: ComponentFixture<PostlistDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostlistDashboardComponent]
    });
    fixture = TestBed.createComponent(PostlistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
