import { Injectable } from '@angular/core';
import { ScoreCard } from '../models/scorecard.model';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  stats: ScoreCard[] = [];
  constructor() {
    if (typeof localStorage !== 'undefined') {
        const data = localStorage.getItem('stats');

        if(data){
          this.stats = JSON.parse(data);
        }
    } else {
      console.log('Local Storage is not supported');
    }
   }

   addName(name: ScoreCard){
    this.stats.push(name);
    localStorage.setItem('stats', JSON.stringify(this.stats))
   }

   deleteStats(statsId: number){
    this.stats = this.stats.filter(x => x.id != statsId)
   }

   getStats(): ScoreCard[] {
    return this.stats;
   }
}
