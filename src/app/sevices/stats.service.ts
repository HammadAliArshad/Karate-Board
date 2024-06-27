import { Injectable } from '@angular/core';
import { ScoreCard } from '../models/scorecard.model';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  stats: ScoreCard[] = [];
  // constructor() {
  //   if (typeof localStorage !== 'undefined') {
  //     const data = localStorage.getItem('stats');

  //     if (data) {
  //       this.stats = JSON.parse(data);
  //     }
  //   } else {
  //     console.log('Local Storage is not supported');
  //   }
  // }

  addName(name: ScoreCard) {
    this.stats.push(name);
    localStorage.setItem('stats', JSON.stringify(this.stats));
  }

  deleteStats(statsId: number) {
    for (let i = 0; i < this.stats.length; i++) {
      if (this.stats[i].id == statsId) {
        this.stats.splice(i, 1);
      }
    }
    localStorage.setItem('stats', JSON.stringify(this.stats));
  }

  getStats(): ScoreCard[] {
    return this.stats;
  }
}
