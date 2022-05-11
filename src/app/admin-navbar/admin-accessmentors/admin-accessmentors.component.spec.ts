import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccessmentorsComponent } from './admin-accessmentors.component';

describe('AdminAccessmentorsComponent', () => {
  let component: AdminAccessmentorsComponent;
  let fixture: ComponentFixture<AdminAccessmentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccessmentorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccessmentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
