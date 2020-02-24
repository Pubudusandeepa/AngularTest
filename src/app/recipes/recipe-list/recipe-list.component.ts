import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes = [
    new Recipe('A test Recipe',
    'Tset ',
     'https://image.shutterstock.com/image-photo/frame-organic-food-fresh-raw-260nw-506516848.jpg' )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
