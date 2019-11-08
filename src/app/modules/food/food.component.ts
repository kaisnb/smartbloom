import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sb-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
