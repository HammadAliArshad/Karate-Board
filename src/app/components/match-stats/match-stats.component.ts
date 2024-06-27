import { NgFor, NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScoreCard } from '../../models/scorecard.model';

@Component({
  selector: 'app-match-stats',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './match-stats.component.html',
  styleUrl: './match-stats.component.scss',
})
export class MatchStatsComponent {
  stats: ScoreCard[] = [];

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const localStats = localStorage.getItem('stats');
    if (localStats != null) {
      this.stats = JSON.parse(localStats);
    }
  }

  onDelete(id: number) {
    for (let i = 0; i < this.stats.length; i++) {
      if (this.stats[i].id == id) {
        this.stats.splice(i, 1);
      }
    }
    localStorage.setItem('stats', JSON.stringify(this.stats));
  }
}
