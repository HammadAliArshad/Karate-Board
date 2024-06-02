import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MatchStatsComponent } from './components/match-stats/match-stats.component';
import { BoardComponent } from './components/score-board/board/board.component';

export const routes: Routes = [
  // { path: "", component: MainComponent },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'start', component: BoardComponent },

      { path: 'stats', component: MatchStatsComponent },
    ],
  },
];
