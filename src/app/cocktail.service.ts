import { Injectable } from '@angular/core';
import { Cocktail } from './common/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private cocktails: Cocktail[] = []

  constructor() {}

  public getCocktails(){
    return this.cocktails
  }

  public addCocktails(cocktail: Cocktail){
    this.cocktails.push(cocktail)
  }

}
