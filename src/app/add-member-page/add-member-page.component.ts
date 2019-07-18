import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { BackendApiService} from '../backend-api.service';
@Component({
  selector: 'app-add-member-page',
  templateUrl: './add-member-page.component.html',
  styleUrls: ['./add-member-page.component.css']
})
export class AddMemberPageComponent{
  memberForm:FormGroup;
  name; 
  identify;
  phone; 
  address;
  email;
  password;
  confirmPassword;
  passwordEqual=false;
  constructor(private formBuilder:FormBuilder,private api:BackendApiService){ 
    this.memberForm=this.formBuilder.group({
      name:['',Validators.minLength(3)],
      identify:'',
      phone:'',
      address:'',
      email:['',Validators.email],
      password:'',
      confirmPassword:'',
    });
    this.name = this.memberForm.controls['name'];
    this.identify = this.memberForm.controls['identify'];
    this.phone = this.memberForm.controls['phone'];
    this.address = this.memberForm.controls['address'];
    this.email = this.memberForm.controls['email'];
    this.password = this.memberForm.controls['password'];
    this.confirmPassword = this.memberForm.controls['confirmPassword'];
  
  }

  validPassword(){
    return(this.password.value==this.confirmPassword.value); 
  }
  submit(formData){
    for(let data in formData)
      console.log(`${data} :`+formData[data])
   
  }

  testApi(){
    let apitest=this.api.addAccount();
    apitest.subscribe(resp=>{
      const content=resp;
      console.log(content);
    },error=>{
      console.log(error);
    }
    );
  }

}