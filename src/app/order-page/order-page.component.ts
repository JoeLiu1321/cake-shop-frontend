import { Component, OnInit } from '@angular/core';
import { BackendApiService, Order } from '../backend-api.service';
import { AccountService } from '../account.service';
@Component({
    selector: 'app-order-page',
    templateUrl: './order-page.component.html',
    styleUrls: ['order-page.component.css']
})
export class OrderPageComponent implements OnInit {
    displayHeader: orderContent | ReadonlyMap<any, any> = {
        '訂單編號': 0,
        '購買人': '',
        '產品名稱': '',
        '產品金額': 0,
        '購買數量': 0,
        '訂購時間': '',
        '金額': 0
    }
    orders;
    constructor(private api: BackendApiService, public account: AccountService) {
    }

    ngOnInit() {
        this.api.getAllOrder().subscribe(
            resp => {
                if (resp.status)
                    this.orders = this.parseOrder(resp.object);
            }
        )
    }

    parseOrder(orders) {
        let result = [];
        for (let order of orders) {

            const orderContent: orderContent = {
                '訂單編號': order.id,
                '購買人': order.accountName,
                '產品名稱': order.product.name,
                '產品金額': order.product.price,
                '購買數量': order.number,
                '訂購時間': order.time,
                '金額': order.number * order.product.price,
            }
            result.push(orderContent);
        }
        return result;
    }

    onSelect(order: Order) {
        console.log(order.id)
    }
}

export interface orderContent {
    '訂單編號'?: number,
    '購買人'?: string,
    '產品名稱'?: string,
    '產品金額'?: number,
    '購買數量'?: number,
    '訂購時間'?: string,
    '金額'?: number,
}
