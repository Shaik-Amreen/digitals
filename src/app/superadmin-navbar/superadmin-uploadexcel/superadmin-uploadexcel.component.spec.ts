import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminUploadexcelComponent } from './superadmin-uploadexcel.component';

describe('SuperadminUploadexcelComponent', () => {
  let component: SuperadminUploadexcelComponent;
  let fixture: ComponentFixture<SuperadminUploadexcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminUploadexcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminUploadexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
