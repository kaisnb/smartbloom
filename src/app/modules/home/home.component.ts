import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FabService } from 'src/app/fab.service';

@Component({
  selector: 'sb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  maxDate = new Date();

  constructor(fab: FabService) {
    fab.hide();
  }

  ngOnInit() {}
}
