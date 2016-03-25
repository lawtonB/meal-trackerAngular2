import {Component} from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: "edit-meal-details",
  inputs: ['meal'],
  template:`
  <div class='meal-form'>
    <h3> Edit Meal: </h3>
    <input [(ngModel)]="meal.name" class="col-sm-8 input-lg task-form" />
    <input [(ngModel)]="meal.details" class="col-sm-8 input-lg task-form" />
    <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg task-form" />
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
