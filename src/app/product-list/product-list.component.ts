import { Component,OnInit } from '@angular/core';
import {BackendApiService,Product} from '../backend-api.service'
@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products:any;
    constructor(private apiService:BackendApiService){
    }
    ngOnInit(){
        this.apiService.getAllProduct().subscribe(
            resp=>{
                if(resp.status)
                    this.products=this.filterOnSellProduct(resp.object);
            }
        )
    }

    private filterOnSellProduct(products){
        let onSellProducts=[];
        for(let product of products){
            if(product.onSell)
                onSellProducts.push(product);
        }
        return onSellProducts;
    }
}
