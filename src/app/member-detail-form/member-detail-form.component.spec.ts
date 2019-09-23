import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetailFormComponent } from './member-detail-form.component';

describe('MemberDetailFormComponent', () => {
  let component: MemberDetailFormComponent;
  let fixture: ComponentFixture<MemberDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberDetailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
