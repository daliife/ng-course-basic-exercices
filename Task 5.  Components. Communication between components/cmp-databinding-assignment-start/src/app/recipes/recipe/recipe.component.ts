import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() recipe: Recipe;

  @Output() recipeUpdated = new EventEmitter<Recipe>();

  ingredient = '';

  constructor() { }

  ngOnInit() { }

  onAddIngredient() {
    this.recipe.ingredients.push(this.ingredient);
    this.recipeUpdated.emit(this.recipe);
    this.clearIngredient();
  }

  onRemoveIngredient(index: number) {
    if (index !== -1) {
      this.recipe.ingredients.splice(index, 1);
      this.recipeUpdated.emit(this.recipe);
    }
  }

  clearIngredient() {
    this.ingredient = '';
  }

}
