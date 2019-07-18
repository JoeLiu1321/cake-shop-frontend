import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class BackendApiService {

  url="http://localhost:8080/account";
  constructor(private http:HttpClient) { }
  
  public getAccount(){
    return this.http.get<String>(this.url+'/test',{responseType:'text'});
  }

  public addAccount(){
    let account={
      accountName:'tim98765',
      password:'tim98765',
      privilege:1,
      info:{
        identify:'A1928334',
        name:'Joe',
        phone:'0987654321'
      }
    }
    return this.http.post<String>(this.url,account,{
        'responseType':'text',
        'Content-Type':'application/json'
      });
    
  }
}

export interface Account{
  id?:Number,
  accountName:String,
  password:String,
  privilege?:Number,
  info?:AccountInfo

}

export interface AccountInfo{
  id?:Number,
  identify?:Number,
  name:String,
  phone:String,
  address:String,
  email:String
}