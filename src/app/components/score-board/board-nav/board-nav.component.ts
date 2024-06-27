import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScoreCard } from '../../../models/scorecard.model';
import { StatsService } from '../../../sevices/stats.service';

@Component({
  selector: 'app-board-nav',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './board-nav.component.html',
  styleUrl: './board-nav.component.scss',
})
export class BoardNavComponent {
 stats: ScoreCard[] = [];
  Scorecard: any = {
    id: 0,
    akaName: '',
    akaScore: 0,
    aoName: '',
    aoScore: 0,
  };
  constructor(private statsService: StatsService ) {}

  onSave() {      
      this.Scorecard.id = this.statsService.getStats().length + 1;
      this.statsService.addName(this.Scorecard);
      this.Scorecard = {
        id: 0,
        akaName: '',
        akaScore: 0,
        aoName: '',
        aoScore: 0,
      };
  }
}
