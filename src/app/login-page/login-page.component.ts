import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {AccountService} from '../account.service';
import {BackendApiService} from '../backend-api.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{
  loginForm:FormGroup;
  constructor(private account:AccountService, private formBuilder:FormBuilder,private apiService:BackendApiService){ 
    this.loginForm=this.formBuilder.group({
      account:'',
      password:''
    });
  }

  submit(formData) {
    this.account.login(formData.account,formData.password);
    this.loginForm.reset({account:formData.account,password:''});
  }

}