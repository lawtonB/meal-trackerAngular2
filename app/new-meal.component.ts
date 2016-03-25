import {Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class='meal-form'>
    <h3>Create Meal:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Details" class="col-sm-8 input-lg" #newDetails>
    <input placeholder="Calories" class="col-sm-8 input-lg" #newCalory>
    <button (click)='addMeal(newName, newDetails, newCalory)'>Add</button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalory: HTMLInputElement){
    var newMeal = new Meal(newName.value, newDetails.value, parseInt(newCalory.value));
    this.onSubmitNewMeal.emit(newMeal);
    newName.value = "";
    newDetails.value = "";
    newCalory.value = "";
  }
}
