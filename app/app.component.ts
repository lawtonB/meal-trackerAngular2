import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';


@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1>Meal_Tracker</h1>
      <meal-list
      [mealList] = "meals"
      (onMealSelect)="mealWasSelected($event)">
      </meal-list>
  <div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("pizza", "with pepperoni",200),
      new Meal("salad", "greek",150),
      new Meal("steak", "rare",300),
    ];
  }

  mealWasSelected(clickedMeal: Meal): void {
    // console.log('parent', clickedMeal);
  }
}
