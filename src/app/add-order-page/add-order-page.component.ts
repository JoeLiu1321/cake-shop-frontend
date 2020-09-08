import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';
import { BackendApiService, Order } from '../backend-api.service';
@Component({
    selector: 'app-add-order-page',
    templateUrl: './add-order-page.component.html',
    styleUrls: ['./add-order-page.component.css']
})
export class AddOrderPageComponent implements OnInit {
    allProduct;
    productId;
    orderForm: FormGroup;
    product;
    productNumber;
    constructor(private activatedRouter: ActivatedRoute, private formBuilder: FormBuilder, public account: AccountService, private api: BackendApiService, private router: Router) {
        this.orderForm = formBuilder.group({
            product: '',
            productNumber: [0, Validators.min(1)],
        })

        this.product = this.orderForm.controls['product'];
        this.productNumber = this.orderForm.controls['productNumber'];

    }

    ngOnInit() {
        this.api.getAllProduct().subscribe(
            resp => {
                if (resp.status)
                    this.allProduct = this.filterOnSellProduct(resp.object);
            }
        )
        this.activatedRouter.paramMap.subscribe(
            params => {
                this.productId = params.get('productId');
                if (this.productId)
                    this.product.setValue(this.productId);
            }
        )
    }

    private filterOnSellProduct(products) {
        let onSellProducts = [];
        for (let product of products) {
            if (product.onSell)
                onSellProducts.push(product);
        }
        return onSellProducts;
    }

    onSubmit(formData) {
        let productId = formData['product'];
        let product = this.allProduct.find(x => x.id == productId); //fixme
        if (window.confirm(`確認要購買'${product.name}'總共${formData['productNumber']}個?`)) {
            let order: Order = {
                product: product,
                accountName: this.account.getAccount(),
                number: formData.productNumber
            }
            this.api.createOrder(order).subscribe(
                resp => {
                    window.alert(`${resp.message}`);
                    this.router.navigate(['/tab', '訂單管理'])
                }
            )
        }

    }

}
