import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable()
export class BackendApiService {
  url='http://localhost:8080';
  accountUrl=this.url+'/account';
  productUrl=this.url+'/product';
  orderUrl=this.url+'/order';
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

  public getProduct(productId){
    return this.http.get<Product>(this.productUrl+`/${productId}`);
  }

  public createProduct(product:Product){
    return this.http.post<Message>(this.productUrl,product,{
      headers:{
      'Content-Type':'application/json'
      },
    });
  }

  public updateProduct(product:Product){
    return this.http.patch<Message>(this.productUrl+`/${product.id}`,product,{
      headers:{
      'Content-Type':'application/json'
      },
    });
  }

  public createOrder(order:Order){
    return this.http.post<Message>(this.orderUrl,order,{
      headers:{
        'Content-Type':'application/json'
        },
    });
  }

  public getAllOrder(){
    return this.http.get<Order[]>(this.orderUrl);
  }
}

export interface Message{
  status:boolean,
  message:String
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
  isFinish?:boolean
}