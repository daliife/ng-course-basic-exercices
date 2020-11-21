import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  @Output() recipeAdded = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onAddRecipe() {
    this.recipeAdded.emit();
  }

}
