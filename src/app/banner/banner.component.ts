import { Component, OnInit } from '@angular/core';
import * as data from '../info.json';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
})
export class BannerComponent implements OnInit {
  items: {
    name: string;
    description: string;
    image: string;
    likes: number;
    dislikes: number;
  }[];
  principal: any;
  keys: any[];
  constructor() {
    this.items = data;
    this.keys = Object.entries(this.items);
    this.principal = this.keys[0][1][0];
  }

  liked():void {
    console.log(this.principal.likes);
    this.principal.likes = this.principal.likes +1;
    localStorage.setItem("likes",this.principal.likes);
  }
  disliked():void {
    console.log(this.principal.dislikes);
    this.principal.dislikes = this.principal.dislikes +1;
    localStorage.setItem("dislikes",this.principal.dislikes);
  }
  ngOnInit(): void {
    if(localStorage.getItem("likes")){
      
      this.principal.likes = Number(localStorage.getItem("likes"));
    }
    if(localStorage.getItem("dislikes")){
      this.principal.dislikes = Number(localStorage.getItem("dislikes"));
    }
  }
}
