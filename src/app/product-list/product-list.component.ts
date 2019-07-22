import { Component,OnInit } from '@angular/core';
import {BackendApiService,Product} from '../backend-api.service'
@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products:Product[];
    constructor(private apiService:BackendApiService){
    }
    ngOnInit(){
        this.apiService.getAllProduct().subscribe(
            products=>{
                this.products=products;
            }
        )
    }
}
