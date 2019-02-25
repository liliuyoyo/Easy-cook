import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients : Ingredient[] = [
        new Ingredient("tomato",5),
        new Ingredient("egg",6)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredientsList(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

}