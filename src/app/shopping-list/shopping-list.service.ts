import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
    ingredientChanged = new Subject<Ingredient[]>();
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
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredientsList(ingredients:Ingredient[]){
        for(let ing of ingredients){
            this.addIngredients(ing);
        }
        this.ingredientChanged.next(this.ingredients.slice());
    }

}