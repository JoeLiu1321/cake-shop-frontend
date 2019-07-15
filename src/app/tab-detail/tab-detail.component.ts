import { Component, OnInit,Input } from '@angular/core';
// import {tabs} from '../tab-bar/tab-bar.component'

@Component({
  selector: 'app-tab-detail',
  templateUrl: './tab-detail.component.html',
  styleUrls: ['./tab-detail.component.css']
})
export class TabDetailComponent implements OnInit {
  @Input()tab;
  constructor(){
    
  }
  ngOnInit() {
  
  }

}