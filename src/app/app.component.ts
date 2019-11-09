import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FabService } from './fab.service';

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(public fab: FabService) {}
}
