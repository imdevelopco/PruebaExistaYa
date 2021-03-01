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
  }
  disliked():void {
    console.log(this.principal.dislikes);
    this.principal.dislikes = this.principal.dislikes +1;
  }
  ngOnInit(): void {}
}
