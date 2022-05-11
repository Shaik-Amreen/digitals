import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccessmaterialsComponent } from './admin-accessmaterials.component';

describe('AdminAccessmaterialsComponent', () => {
  let component: AdminAccessmaterialsComponent;
  let fixture: ComponentFixture<AdminAccessmaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccessmaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccessmaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
