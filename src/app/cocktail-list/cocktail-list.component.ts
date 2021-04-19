import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../common/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  cocktails: Cocktail[] = [];

  constructor(public getCocktailsService: CocktailService) { 
    
  }

  ngOnInit(): void {
    this.getCocktailsService.addCocktails(new Cocktail('Sex on the Beach', 12, 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/209813.jpg'))
    this.getCocktailsService.addCocktails(new Cocktail('Mojito', 8, 'https://static.750g.com/images/1200-630/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg'))
    this.cocktails = this.getCocktailsService.getCocktails()
  }

}
