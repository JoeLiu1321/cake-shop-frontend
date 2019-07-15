import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {AccountService} from '../account.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{
  loginForm:FormGroup;
  constructor(private account:AccountService, private formBuilder:FormBuilder,){ 
    this.loginForm=this.formBuilder.group({
      account:'',
      password:''
    });
  }

  submit(formData) {
    if(formData['account']=='' || formData['password']==''){
      window.alert('Account and Password should not be empty');
      return;
    }
    else
      this.account.login(formData);
  }

}