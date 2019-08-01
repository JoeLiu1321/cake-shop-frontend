import { Component} from '@angular/core';

export const tabs=['關於我們','產品介紹','線上訂購','加入會員','訂單記錄','編輯產品','使用者管理'];

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent {
  tabs=tabs;
  currentTab=tabs[0]
  
  setCurrentTab(tab){
    this.currentTab=tab;
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/