import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdetailsComponent } from './postdetails.component';

describe('PostdetailsComponent', () => {
  let component: PostdetailsComponent;
  let fixture: ComponentFixture<PostdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostdetailsComponent]
    });
    fixture = TestBed.createComponent(PostdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
