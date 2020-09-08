import { Component } from '@angular/core';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent {
  viewerTabs = ['關於我們', '產品介紹', '加入會員'];
  adminTabs = ['產品介紹', '產品管理', '會員管理', '訂單管理'];

  currentTab;
  constructor(public account: AccountService) {

  }

  setCurrentTab(tab) {
    this.currentTab = tab;
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/