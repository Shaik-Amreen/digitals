import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccesstudentsComponent } from './admin-accesstudents.component';

describe('AdminAccesstudentsComponent', () => {
  let component: AdminAccesstudentsComponent;
  let fixture: ComponentFixture<AdminAccesstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccesstudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccesstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
