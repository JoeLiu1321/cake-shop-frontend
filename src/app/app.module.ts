import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { TabDetailComponent } from './tab-detail/tab-detail.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AccountService } from './account.service';
import { AddMemberPageComponent } from './add-member-page/add-member-page.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TabBarComponent },
      { path:'login', component:LoginPageComponent},
      { path:'addMember',component:AddMemberPageComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TabBarComponent,
    TabDetailComponent,
    LoginPageComponent,
    AddMemberPageComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [AccountService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/