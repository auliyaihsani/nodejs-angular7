import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedcustomerComponent } from './updatedcustomer.component';

describe('UpdatedcustomerComponent', () => {
  let component: UpdatedcustomerComponent;
  let fixture: ComponentFixture<UpdatedcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
