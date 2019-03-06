import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients : Ingredient[] = [];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredient:Ingredient){
        var added = false;
        for(let ing of this.ingredients){
            if(ing.name === ingredient.name){
                ing.amount += ingredient.amount;
                added = true;
            }
        }
        if(!added){
            this.ingredients.push(ingredient);
        }
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredientsList(ingredients:Ingredient[]){
        for(let ing of ingredients){
            this.addIngredients(ing);
        }
        this.ingredientChanged.emit(this.ingredients.slice());
    }

}