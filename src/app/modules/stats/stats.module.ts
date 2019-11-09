import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [StatsComponent],
  imports: [CommonModule, StatsRoutingModule, ChartsModule, MaterialModule]
})
export class StatsModule {}
