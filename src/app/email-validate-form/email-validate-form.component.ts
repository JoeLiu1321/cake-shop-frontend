import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-email-validate-form',
  templateUrl: './email-validate-form.component.html',
  styleUrls: ['./email-validate-form.component.css']
})
export class EmailValidateFormComponent implements OnInit {
  @Output() emailEvent=new EventEmitter();
  errorMsg="Email格式不符";
  emailForm:FormGroup;
  validateCodeForm:FormGroup;
  validateCode:FormControl;
  email:FormControl;
  constructor() {
    this.email=new FormControl('',Validators.email);
    this.emailForm=new FormGroup({
      email:this.email
    });
    this.validateCode=new FormControl('');
    this.validateCodeForm=new FormGroup({
      validateCode:this.validateCode
    });
  }
    
  ngOnInit() {
  }

  onSubmit(formData){
    this.emailEvent.emit(formData);
  }



}
