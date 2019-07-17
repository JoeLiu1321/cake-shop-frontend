import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class BackendApiService {

  url="http://140.124.181.144:8080/account/test";
  constructor(private http:HttpClient) { }
  
  public getAccount(){
    return this.http.get<String>(this.url,{'Content-Type':'application/json'});
  }
}

export interface Account{
  id:Number;
}