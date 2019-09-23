import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailValidateFormComponent } from './email-validate-form.component';

describe('EmailValidateFormComponent', () => {
  let component: EmailValidateFormComponent;
  let fixture: ComponentFixture<EmailValidateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailValidateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailValidateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
