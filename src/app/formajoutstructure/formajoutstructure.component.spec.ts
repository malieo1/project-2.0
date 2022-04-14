import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormajoutstructureComponent } from './formajoutstructure.component';

describe('FormajoutstructureComponent', () => {
  let component: FormajoutstructureComponent;
  let fixture: ComponentFixture<FormajoutstructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormajoutstructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormajoutstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
