import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { TabDetailComponent } from './tab-detail/tab-detail.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AccountService } from './account.service';
import { AddMemberPageComponent } from './add-member-page/add-member-page.component';
import { BackendApiService } from './backend-api.service';
import {ProductListComponent} from './product-list/product-list.component';
import {AddOrderPageComponent} from './add-order-page/add-order-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AddProductPageComponent} from './add-product-page/add-product-page.component';
import {OrderPageComponent} from './order-page/order-page.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TabDetailComponent },
      { path:'tab/:tab', component:TabDetailComponent},
      { path:'tab/:tab/:productId',component:AddOrderPageComponent},
      { path:'login', component:LoginPageComponent},
      { path:'addMember',component:AddMemberPageComponent},
    ]),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TabBarComponent,
    TabDetailComponent,
    LoginPageComponent,
    AddMemberPageComponent,
    ProductListComponent,
    AddOrderPageComponent,
    AddProductPageComponent,
    OrderPageComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [AccountService, BackendApiService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/