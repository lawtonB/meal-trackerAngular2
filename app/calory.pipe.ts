import {Pipe, PipeTransform} from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calory",
  pure: false
})

export class CaloryPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCalory = args[0];
    if(desiredCalory === "healthy"){
      return input.filter((meal) => {
        return meal.calories < 300;
      });
    } else if(desiredCalory === "unhealthy"){
      return input.filter((meal) => {
        return meal.calories > 300;
      });
    } else {
      return input;
    }
  }
}
