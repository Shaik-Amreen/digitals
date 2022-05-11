import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccesstechnicalheadsComponent } from './admin-accesstechnicalheads.component';

describe('AdminAccesstechnicalheadsComponent', () => {
  let component: AdminAccesstechnicalheadsComponent;
  let fixture: ComponentFixture<AdminAccesstechnicalheadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccesstechnicalheadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccesstechnicalheadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
