import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
@Injectable()
export class BackendApiService {
  url='http://localhost:8080';
  accountUrl=this.url+'/account';
  productUrl=this.url+'/product';
  constructor(private http:HttpClient) { 

  }

  public addAccount(account:Account){
    return this.http.post(this.accountUrl,account,{
        headers:{
        'Content-Type':'application/json'
        },
      });
  }

  public login(account,password){
    let params=new HttpParams()
    .append('accountName',`${account}`)
    .append('password',`${password}`);
    return this.http.post(this.accountUrl+'/login',params);
  }

  public getAllProduct(){
    return this.http.get<Product[]>(this.productUrl);
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

export interface Product{
  id?:number,
  name:string,
  description:string,
  onSell:boolean,
  price:number,
  volume:number
}