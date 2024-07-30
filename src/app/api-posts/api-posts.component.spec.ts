import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPostsComponent } from './api-posts.component';

describe('ApiPostsComponent', () => {
  let component: ApiPostsComponent;
  let fixture: ComponentFixture<ApiPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiPostsComponent]
    });
    fixture = TestBed.createComponent(ApiPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
