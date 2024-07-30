import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomdetailsComponent } from './showroomdetails.component';

describe('ShowroomdetailsComponent', () => {
  let component: ShowroomdetailsComponent;
  let fixture: ComponentFixture<ShowroomdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowroomdetailsComponent]
    });
    fixture = TestBed.createComponent(ShowroomdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
