import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  
  // @Output() ingredientAdded = new EventEmitter<object>();
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    console.log('sad');
    // this.ingredientAdded.emit({name:this.nameInputRef.nativeElement.value,amount:this.amountInputRef.nativeElement.value});
    const newIngredinet = new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value); 
    this.ingredientAdded.emit(newIngredinet);
  }
}
