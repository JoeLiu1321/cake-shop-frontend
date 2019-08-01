import { Component, OnInit } from '@angular/core';
import {BackendApiService} from '../backend-api.service';
@Component({
    selector: 'app-order-page',
    templateUrl: 'order-page.component.html',
    styleUrls: ['order-page.component.css']
})
export class OrderPageComponent implements OnInit{
    displayHeader={
        id:'訂單編號',
        product:'產品名稱',
        accountName:'購買人',
        time:'訂購時間',
        pay:'已付款',
        finish:'訂單完成'
    }
    orders;
    constructor(private api:BackendApiService){
    }

    ngOnInit(){
        this.api.getAllOrder().subscribe(
            orders=>{
                this.orders=orders;
                
            }
        )
    }
}
