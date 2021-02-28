import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input() name : string;
  @Input() description: string;
  @Input() image: string;
  @Input() likes : number;
  @Input()dislikes: number;

  constructor() { 
    this.name = "",
    this.description = "",
    this.image = "",
    this.likes = 0,
    this.dislikes = 0
  }

  ngOnInit(): void {
  }

}
