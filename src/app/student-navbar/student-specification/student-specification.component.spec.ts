import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSpecificationComponent } from './student-specification.component';

describe('StudentSpecificationComponent', () => {
  let component: StudentSpecificationComponent;
  let fixture: ComponentFixture<StudentSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSpecificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
