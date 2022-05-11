import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLibrayComponent } from './admin-libray.component';

describe('AdminLibrayComponent', () => {
  let component: AdminLibrayComponent;
  let fixture: ComponentFixture<AdminLibrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLibrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLibrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
