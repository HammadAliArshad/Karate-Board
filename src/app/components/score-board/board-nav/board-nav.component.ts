import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScoreCard } from '../../../models/scorecard.model';
import { StatsService } from '../../../sevices/stats.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { BoardHeaderComponent } from "../board-header/board-header.component";

@Component({
  selector: 'app-board-nav',
  standalone: true,
  imports: [FormsModule, SweetAlert2Module],
  templateUrl: './board-nav.component.html',
  styleUrl: './board-nav.component.scss',
})
export class BoardNavComponent {
  // @Input() scoreAo: number[];
  stats: ScoreCard[] = [];
  Scorecard: any = {
    id: 0,
    akaName: '',
    akaScore: 0,
    aoName: '',
    aoScore: 0,
  };
  constructor(private statsService: StatsService) {}

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
    // Swal.fire('Aka Score = ', 'Informed', 'error');
    console.log(this.statsService.getStats());
  }

  // @ViewChild(BoardHeaderComponent) score:any;
  // getScore(scoreAo: number) {
  //   this.Scorecard.aoScore = scoreAo;
  // }
}
