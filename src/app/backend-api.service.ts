import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
@Injectable()
export class BackendApiService {

  url="http://localhost:8080/account";
  constructor(private http:HttpClient) { }
  
  public getAccount(){
    return this.http.get(this.url+'/test',{responseType:'text'});
  }

  public addAccount(account:Account){
    return this.http.post(this.url,account,{
        headers:{
        'Content-Type':'application/json'
        },
        responseType:'text'
      });
  }

  public login(account,password){
    // const params={
    //   'accountName':account,
    //   'password':password
    // }
    let params=new HttpParams()
    .append('accountName',`${account}`)
    .append('password',`${password}`);
    return this.http.post(this.url+'/login',params);
  }
}

export interface Account{
  id?:number,
  accountName:string,
  password:string,
  privilege?:number,
  info?:AccountInfo

}

export interface AccountInfo{
  id?:number,
  identify?:number,
  name:string,
  phone:string,
  address:string,
  email:string
}