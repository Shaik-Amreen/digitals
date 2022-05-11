import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssigntechnicalheadsComponent } from './admin-assigntechnicalheads.component';

describe('AdminAssigntechnicalheadsComponent', () => {
  let component: AdminAssigntechnicalheadsComponent;
  let fixture: ComponentFixture<AdminAssigntechnicalheadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAssigntechnicalheadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssigntechnicalheadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
