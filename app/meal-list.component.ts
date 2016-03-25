import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [],
  directives: [],
  template: `
  <div *ngFor="#meal of mealList"
  (click)="mealClicked(meal)"
  [class.selected]='meal === selectedMeal'>
  <h3>{{ meal.name }}</h3>
  <h3>details: {{ meal.details }}</h3>
  <h3>calories: {{ meal.name }}</h3>
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
    console.log("child", clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal)
  }
}
