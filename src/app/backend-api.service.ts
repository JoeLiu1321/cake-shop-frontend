import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service'
@Injectable()
export class BackendApiService {
  url='http://localhost:8080';
  accountUrl=this.url+'/account';
  productUrl=this.url+'/product';
  orderUrl=this.url+'/order';
  headers={'Content-Type':'application/json'}  
  constructor(private http:HttpClient, private cookie:CookieService) { 

  }

  private getSession(){
    let sessionKey=this.cookie.get('sessionKey');
    let sessionValue=this.cookie.get('sessionValue')
    let params=new HttpParams()
    .append('sessionKey',`${sessionKey}`)
    .append('sessionValue',`${sessionValue}`);
    return params;
  }

  public isAccountExisted(accountId){
    return this.http.get<Message>(`${this.accountUrl}/${accountId}`);
  }

  public addAccount(account:Account){
    return this.http.post<Message>(this.accountUrl,account,{headers:this.headers});
  }

  public getAccount(accountName:string){
    return this.http.get<Message>(this.accountUrl+`/${accountName}`,{params:this.getSession(),headers:this.headers})
  }

  public login(account,password){
    let params=new HttpParams()
    .append('accountName',`${account}`)
    .append('password',`${password}`);
    return this.http.post<Message>(this.accountUrl+'/login',params);
  }

  public logout(accountName){
    return this.http.post<Message>(this.accountUrl+`/logout/${accountName}`,null);
  }

  public getAllProduct(){
    return this.http.get<Message>(this.productUrl);
  }

  public getProduct(productId){
    return this.http.get<Message>(this.productUrl+`/${productId}`);
  }

  public createProduct(product:Product){
    let params=this.getSession();
    return this.http.post<Message>(this.productUrl,product,{params:params,headers:this.headers});
  }

  public updateProduct(product:Product){
    let params=this.getSession();
    return this.http.patch<Message>(this.productUrl+`/${product.id}`,product,{params:params,headers:this.headers});
  }

  public createOrder(order:Order){
    return this.http.post<Message>(this.orderUrl,order,{headers:this.headers,params:this.getSession()});
  }

  public getAllOrder(){
    return this.http.get<Message>(this.orderUrl,{params:this.getSession(),headers:this.headers});
  }

  public getOrder(accountName:string){
    return this.http.get<Message>(this.orderUrl+`/${accountName}`,{params:this.getSession(),headers:this.headers});
  }

  public validateMail(email:string){
    return this.http.get<Message>(this.accountUrl+`/mail/${email}`,{headers:this.headers});
  }

  public checkSession(sessionKey:string,sessionValue:string){
    let params=new HttpParams()
    .append('sessionKey',sessionKey)
    .append('sessionValue',sessionValue);
    return this.http.get<Message>(this.accountUrl+'/session',{params:params,headers:this.headers})
  }
}

export interface Message{
  status:boolean,
  message:String,
  object?:Object
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

export interface Order{
  id?:number,
  product:Product,
  accountName:string,
  time?:string,
  isPay?:boolean,
  payment?:Payment,
  number?:number,
}

export interface Payment{
  id?:number,
  account?:Account,
  price?:number,
  time?:string,
}