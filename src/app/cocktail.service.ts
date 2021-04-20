import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from  "rxjs/operators";
import { Cocktail } from './common/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private cocktails: Cocktail[] = []

  private service: HttpClient;

  constructor(param_service: HttpClient) {
    this.service = param_service
  }

  public getCocktails(): Observable<Cocktail[]> {
    const obs:Observable<any> = this.service.get('assets/cocktails.json')
    const treatment = (param_data:any) => {
      return param_data.cocktails as Cocktail[]
    }
    return obs.pipe(map(treatment))
  }

  public addCocktails(cocktail: Cocktail){
    this.cocktails.push(cocktail)
  }

}
