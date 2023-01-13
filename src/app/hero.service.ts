import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService:MessageService) {}

  // getHeroes():Hero[]{
  //   return HEROES;
  // }
  getHero(id: number): Observable<Hero> {
    const hero=HEROES.find(h=>h.id==id)!;
    this.messageService.add(`We grabbed hero with id of ${id}`);
    return of(hero);
  }
  getHeroes(): Observable<Hero[]> {
    this.messageService.setTitle('Message Service is now Running and All Heroes are fetched from the Hero Service');
    return of(HEROES);
  }
}
