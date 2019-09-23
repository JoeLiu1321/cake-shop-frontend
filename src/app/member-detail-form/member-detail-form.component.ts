import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import {BackendApiService,Account} from '../backend-api.service';
@Component({
  selector: 'app-member-detail-form',
  templateUrl: './member-detail-form.component.html',
  styleUrls: ['./member-detail-form.component.css']
})
export class MemberDetailFormComponent implements OnInit {
  memberForm:FormGroup;
  name:FormControl; 
  identify:FormControl;
  phone:FormControl; 
  address:FormControl;
  email:FormControl;
  password:FormControl;
  confirmPassword:FormControl;
  passwordEqual=false;
  constructor(private api:BackendApiService){ 
    this.name=new FormControl('',Validators.minLength(3));
    this.identify=new FormControl('');
    this.phone=new FormControl('');
    this.address=new FormControl('');
    this.email=new FormControl('',Validators.email);
    this.password=new FormControl('');
    this.confirmPassword=new FormControl('');
    this.memberForm=new FormGroup({
      name:this.name,
      identify:this.identify,
      phone:this.phone,
      address:this.address,
      email:this.email,
      password:this.password,
      confirmPassword:this.confirmPassword,
    });
  }

  ngOnInit(){}

  validPassword(){
    return(this.password.value==this.confirmPassword.value); 
  }

  submit(formData){
    let account:Account={
      accountName:formData.email,
      password:formData.password,
      info:{
        identify:formData.identify,
        name:formData.name,
        phone:formData.phone,
        address:formData['address'],
        email:formData.email
      }
    }
      this.api.addAccount(account).subscribe(
        resp=>{
          window.alert(resp['message']);
        }
      );
    
  }
}
