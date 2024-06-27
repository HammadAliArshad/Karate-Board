import { NgFor, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScoreCard } from '../../models/scorecard.model';
import { StatsService } from '../../sevices/stats.service';

@Component({
  selector: 'app-match-stats',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './match-stats.component.html',
  styleUrl: './match-stats.component.scss',
})
export class MatchStatsComponent {
  stats: ScoreCard[] = [];

  
  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const localStats = localStorage.getItem('stats');
    if (localStats != null) {
      this.stats = JSON.parse(localStats);
    }
  }

  onDelete(id: number) {
    this.statsService.deleteStats(id);
  }
}
