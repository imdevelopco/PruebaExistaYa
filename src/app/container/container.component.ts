import { Component, OnInit, Input } from '@angular/core';
import * as data from '../info.json';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less']
})
export class ContainerComponent implements OnInit {
   items: {name : string,description: string,image: string, likes : number, dislikes: number}[];
   keys : any[];
   principal: any[];
  
  
  constructor() { 
    this.items = data;
    this.keys = Object.entries(this.items);
    this.principal = this.keys[0][1][0];
    this.keys[0][1].splice(0, 1);  
  }
  ngOnInit(): void {  
    
  }

}
