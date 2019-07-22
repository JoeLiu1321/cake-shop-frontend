import { Component} from '@angular/core';

export const tabs=[
    {
      'name':'關於我們',
      'description':'關於我們的content',
    },
    {
      'name':'產品介紹',
      'description':'產品介紹的內容',
    },
    {
     'name':'線上訂購',
     'description':'線上訂購的內容',
    },
    {
      'name':'加入會員',
      'description':'加入會員的內容'
    }
    ]

@Component({
  selector: 'tab-bar',
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