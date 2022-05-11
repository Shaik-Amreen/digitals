import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUploadmaterialsComponent } from './admin-uploadmaterials.component';

describe('AdminUploadmaterialsComponent', () => {
  let component: AdminUploadmaterialsComponent;
  let fixture: ComponentFixture<AdminUploadmaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUploadmaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUploadmaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
