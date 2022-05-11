import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUploadstudentsComponent } from './admin-uploadstudents.component';

describe('AdminUploadstudentsComponent', () => {
  let component: AdminUploadstudentsComponent;
  let fixture: ComponentFixture<AdminUploadstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUploadstudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUploadstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
