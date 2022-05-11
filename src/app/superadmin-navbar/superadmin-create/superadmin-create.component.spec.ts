import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminCreateComponent } from './superadmin-create.component';

describe('SuperadminCreateComponent', () => {
  let component: SuperadminCreateComponent;
  let fixture: ComponentFixture<SuperadminCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
