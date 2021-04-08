import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmployeeeditComponent } from './employeeedit.component';

describe('EmployeeeditComponent', () => {
  let component: EmployeeeditComponent;
  let fixture: ComponentFixture<EmployeeeditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
