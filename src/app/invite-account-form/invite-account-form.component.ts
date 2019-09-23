import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-invite-account-component',
  templateUrl: './invite-account-form.component.html',
  styleUrls: ['./invite-account-form.component.css']
})
export class InviteAccountFormComponent implements OnInit {
  @Output() invite=new EventEmitter();
  errorMsg="邀請碼格式不符";
  formGroup:FormGroup;
  inviteCode:FormControl;
  constructor() {
    this.inviteCode=new FormControl('',Validators.pattern("[0-9]+"));
    this.formGroup=new FormGroup({
      inviteCode:this.inviteCode
    });
    this.formGroup
  }
    
  ngOnInit() {
  }

  onSubmit(formData){
    this.invite.emit(formData);
  }

}
