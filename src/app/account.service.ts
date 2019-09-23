import { Injectable } from '@angular/core';
import {BackendApiService} from './backend-api.service';
import {CookieService} from 'ngx-cookie-service'
@Injectable({providedIn: 'root'})
export class AccountService {
  constructor(private apiService:BackendApiService,private cookieService:CookieService) { 
  
  }
 
  public login(account,password){
    this.apiService.login(account,password).subscribe(
      resp=>{
        if(resp.status){
          let timeout=new Date();
          timeout.setMinutes(timeout.getMinutes()+20)
          this.cookieService.set('sessionKey',resp.object['key'],timeout);
          this.cookieService.set('sessionValue',resp.object['value'],timeout)
          this.saveAccountInfo(account,timeout);
        }
        else{
          window.alert(resp.message)
        }
      }
    );
  }

  public saveAccountInfo(accountName:string,timeout:Date){
    this.apiService.getAccount(accountName).subscribe(
      resp=>{
        if(resp.status){
          let role=resp.object['role']['role'];
          this.cookieService.set('role',role,timeout);
        }
      });
  }

  private getRole(){
    return this.cookieService.get('role');
  }

  public isUser(){
    return this.getRole() =='USER' || this.getRole()=='';
  }

  public isAdmin(){
    return this.getRole()=='ADMIN';
  }

  public isEmployee(){
    return this.getRole()=='EMPLOYEE';
  }

  public logout(){
    this.apiService.logout(this.getAccount()).subscribe();
    this.cookieService.delete('sessionKey');
    this.cookieService.delete('sessionValue');
    this.cookieService.delete('role');
  }

  isLogin(){
    return this.cookieService.check('sessionKey') && this.cookieService.check('sessionValue');
  }

  getAccount(){
    return this.cookieService.get('sessionKey');
  }

}