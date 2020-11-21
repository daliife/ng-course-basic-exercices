import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = [
    {
      id: 0,
      name: 'Pizza',
      description: 'The awesome pizza!',
      difficulty: 'medium',
      estimatedTime: 60,
      ingredients: ['ham', 'tomato', 'mozzarella']
    },
    {
      id: 1,
      name: 'Veggie Burger',
      description: 'The best burger ever!',
      difficulty: 'easy',
      estimatedTime: 30,
      ingredients: ['veggie burger', 'tomato', 'onion']
    }
  ];

  constructor() { }

  ngOnInit() { }

  onRecipeUpdated(newRecipeValue: Recipe, recipeIndex: number) {
    this.recipes[recipeIndex] = newRecipeValue;
  }

  onAddRecipe(newRecipe: Recipe) {
    const tempRecipe = {
      id: 1,
      name: 'Veggie Burger',
      description: 'The best burger ever!',
      difficulty: 'easy',
      estimatedTime: 30,
      ingredients: ['veggie burger', 'tomato', 'onion']
    };
    this.recipes.push(tempRecipe);
  }

}
