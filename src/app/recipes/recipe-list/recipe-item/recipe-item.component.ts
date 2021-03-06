import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() Recipe: Recipe;
  @Output() RecipeClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  showRecipeDetails(){
    this.RecipeClicked.emit();
  }
}
