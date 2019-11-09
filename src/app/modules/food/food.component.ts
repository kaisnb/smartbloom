import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FabService } from 'src/app/fab.service';

@Component({
  selector: 'sb-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodComponent implements OnInit {
  constructor(fab: FabService) {
    fab.hide();
  }

  ngOnInit() {}
}
