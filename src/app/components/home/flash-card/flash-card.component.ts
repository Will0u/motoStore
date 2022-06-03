import { Component, Input, OnInit } from '@angular/core';
import { MotoClass } from 'src/app/models/moto/moto-class';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent implements OnInit {

  @Input() motoDisplay ?: MotoClass

  constructor() { }

  ngOnInit(): void {
  }

}
