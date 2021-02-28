import { Component, OnInit, Input } from '@angular/core';
import * as data from '../info.json';
import { CardComponent} from '../card/card.component'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less']
})
export class ContainerComponent implements OnInit {
  public items: {name : string,description: string,image: string, likes : number, dislikes: number}[];
  public keys : any[];
  
  
  constructor() { 
    this.items = data;
    this.keys = Object.entries(this.items);
   
  }
  ngOnInit(): void {  
  }

}
