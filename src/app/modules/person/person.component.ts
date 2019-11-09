import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FabService } from 'src/app/fab.service';

@Component({
  selector: 'sb-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonComponent implements OnInit {
  constructor(fab: FabService) {
    fab.hide();
  }

  ngOnInit() {}
}
