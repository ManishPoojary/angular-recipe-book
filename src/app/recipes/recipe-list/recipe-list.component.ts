import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Bread ','Test','https://www.kroger.com/asset/5bfbfe3b9da07c0aa601e6bb?data=1'),
    new Recipe('Apple ','Test is a test desc','https://www.kroger.com/asset/5bfbfe3b9da07c0aa601e6bb?data=1')
  ];

  @Output() RecipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe){
   this.RecipeSelected.emit(recipe);
  }
}
