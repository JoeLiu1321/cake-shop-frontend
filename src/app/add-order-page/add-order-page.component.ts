import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup}  from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AccountService} from '../account.service'
@Component({
    selector: 'app-add-order-page',
    templateUrl: './add-order-page.component.html',
    styleUrls: ['./add-order-page.component.css']
})
export class AddOrderPageComponent implements OnInit{
    productId;
    orderForm:FormGroup;
    product;
    products=[
        {
            value:0,
            name:'aa123'
        },
        {
            value:2,
            name:'bb321'
        }
    ]
    constructor(private router:ActivatedRoute, private formBuilder:FormBuilder, private account:AccountService){
        this.orderForm=formBuilder.group({
            product:'',
        })
        this.product=this.orderForm.controls['product'];
    }

    ngOnInit(){
        this.router.paramMap.subscribe(
            params=>{
                this.productId=params.get('productId');
            }
        )
    }
}
