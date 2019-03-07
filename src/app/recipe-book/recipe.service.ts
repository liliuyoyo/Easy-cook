import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe("Tomato eggs",
                   "This is a test recipe",
                   "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                   [new Ingredient("egg",5),new Ingredient("tomato",2)]),
        new Recipe("Cheese pizza",
                   "This is a test recipe2",
                   "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                   [new Ingredient("flour",2),new Ingredient("cheese",8),new Ingredient("tomato",4)])
      ];
    
    constructor(private slService: ShoppingListService){};

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id: number){
        return this.recipes[id];
    }

    addIngredientsToSL(ingredients: Ingredient[]){
        this.slService.addIngredientsList(ingredients);
    }
}