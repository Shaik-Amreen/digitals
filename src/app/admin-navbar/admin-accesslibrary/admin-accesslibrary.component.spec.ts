import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccesslibraryComponent } from './admin-accesslibrary.component';

describe('AdminAccesslibraryComponent', () => {
  let component: AdminAccesslibraryComponent;
  let fixture: ComponentFixture<AdminAccesslibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccesslibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccesslibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
