import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';


@NgModule({
  declarations: [FoodComponent],
  imports: [
    CommonModule,
    FoodRoutingModule
  ]
})
export class FoodModule { }
