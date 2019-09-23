import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteAccountFormComponent } from './invite-account-form.component';

describe('InviteAccountFormComponent', () => {
  let component: InviteAccountFormComponent;
  let fixture: ComponentFixture<InviteAccountFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteAccountFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
