import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})
export class AccountService {
  account;
  constructor() { 
    this.account='';
  }
  addAccount(account){
    
  }

  public login(account){
    this.account=account;
  }

  public logout(){
    this.account='';
  }

  isLogin(){
    return this.account!='';
    // return Object.keys(this.account).length>0;
  }

  getAccount(){
    return this.account;
  }

}