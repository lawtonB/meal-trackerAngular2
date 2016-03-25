import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { NewMealComponent} from './new-meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [],
  directives: [EditMealDetailsComponent, NewMealComponent],
  template: `
  <div *ngFor="#meal of mealList"
  (click)="mealClicked(meal)"
  [class.selected]='meal === selectedMeal'>
    <h3>{{ meal.name }}</h3>
    <h3>details: {{ meal.details }}</h3>
    <h3>calories: {{ meal.calories }}</h3>
    <edit-meal-details *ngIf='meal === selectedMeal' [meal]='selectedMeal'>
    </edit-meal-details>
  </div>
  <new-meal (onSubmitNewMeal)='createMeal($event)'></new-meal>
  `
})

export class MealListComponent {
  public mealList: Meal [];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    // console.log("child", clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal)
  }
  createMeal(tempMeal: Meal): void {
    this.mealList.push(new Meal(tempMeal.name, tempMeal.details, tempMeal.calories)
  );
  }
}
