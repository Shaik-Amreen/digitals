import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssignmentorsComponent } from './admin-assignmentors.component';

describe('AdminAssignmentorsComponent', () => {
  let component: AdminAssignmentorsComponent;
  let fixture: ComponentFixture<AdminAssignmentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAssignmentorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssignmentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
