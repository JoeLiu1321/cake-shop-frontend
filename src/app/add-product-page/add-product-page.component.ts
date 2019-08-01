import { Component,OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BackendApiService} from '../backend-api.service';
import {Router} from '@angular/router';
@Component({
    selector: 'app-add-product-page',
    templateUrl: 'add-product-page.component.html',
    styleUrls: ['add-product-page.component.css']
})
export class AddProductPageComponent implements OnInit{
    productForm;
    currentOption=-1;
    action;
    name;
    description;
    price;
    onSell;
    volume;
    products;
    constructor(private api:BackendApiService, private router:Router){
        this.api.getAllProduct().subscribe(products=>{
            this.products=products;
        });
        this.productForm=new FormGroup({
            action:new FormControl(-1),
            name:new FormControl(),
            description:new FormControl(),
            price:new FormControl(),
            onSell:new FormControl(true),
            volume:new FormControl(),
        });
        this.action=this.productForm.controls['action'];
        this.name=this.productForm.controls['name'];
        this.description=this.productForm.controls['description'];
        this.price=this.productForm.controls['price'];
        this.onSell=this.productForm.controls['onSell'];
        this.volume=this.productForm.controls['volume'];
    }

    ngOnInit(){
    }

    onOptionChange(action){
        this.currentOption=action;
        if(this.products.find(x=>x.id==action)){
            this.api.getProduct(action).subscribe(
                product=>{
                    if(product){
                        this.productForm.reset({
                            action:action,
                            name:product.name,
                            description:product.description,
                            price:product.price,
                            onSell:product.onSell,
                            volume:product.volume
                        });
                    }
                }
            )
        }
        else{
            this.productForm.reset({action:action});
        }
    }

    onSubmit(value){
        let action=(value['action']==-1?'新增':'修改');
        if(!window.confirm(`確認要${action}產品 '${value.name}'嗎?`))
            return;
        if(action=='新增'){
                this.api.createProduct(value).subscribe(
                    resp=>{
                        window.alert(resp.message);
                        this.router.navigate(['/tab','產品介紹']);
                    }
                );
        }
        else{
            value.id=value.action;
            this.api.updateProduct(value).subscribe(
                resp=>{
                    window.alert(resp.message);
                    this.router.navigate(['/tab','產品介紹']);
                }
            );
        }
    }

}
