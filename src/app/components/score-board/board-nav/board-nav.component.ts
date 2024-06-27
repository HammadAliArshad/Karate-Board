import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScoreCard } from '../../../models/scorecard.model';

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
  constructor() {}

  onSave() {      
      this.Scorecard.id = this.stats.length + 1;
      this.stats.push(this.Scorecard);
      console.log(this.stats);
      localStorage.setItem('stats' , JSON.stringify(this.stats));
      this.Scorecard = {
        id: 0,
        akaName: '',
        akaScore: 0,
        aoName: '',
        aoScore: 0,
      };
  }
}
