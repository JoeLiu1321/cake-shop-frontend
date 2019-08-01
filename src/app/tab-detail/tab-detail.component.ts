import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-tab-detail',
  templateUrl: './tab-detail.component.html',
  styleUrls: ['./tab-detail.component.css']
})
export class TabDetailComponent implements OnInit {
  tab;
  constructor(private router:ActivatedRoute){
    
  }
  ngOnInit() {
    this.router.paramMap.subscribe(
      params=>{
          this.tab=params.get('tab');
      })
  }

}