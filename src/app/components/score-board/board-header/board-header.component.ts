import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountdownModule } from 'ngx-countdown';
import { ScoreCard } from '../../../models/scorecard.model';
import Swal from 'sweetalert2';
import { StatsService } from '../../../sevices/stats.service';
import { BoardNavComponent } from "../board-nav/board-nav.component";
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-board-header',
  standalone: true,
  imports: [
    CountdownModule,
    RouterLink,
    NgIf,
    NgClass,
    NgStyle,
    FormsModule
  ],
  templateUrl: './board-header.component.html',
  styleUrl: './board-header.component.scss',
})
export class BoardHeaderComponent {
  stats: ScoreCard[] = [];

  @Output() scoreAka: any = 0;
  @Output() scoreAo: any = 0;

  matchTime: any = 180;
  currentFoul: any = 0;
  akaCategoryOne: any = 0;
  akaCategoryTwo: any = 0;
  aoCategoryOne: any = 0;
  aoCategoryTwo: any = 0;
  enable: boolean = false;
  history: number[] = [];

  constructor(private statsService: StatsService) {}
  // stats: ScoreCard[] = [];
  Scorecard: any = {
    id: 0,
    akaName: '',
    akaScore: 0,
    aoName: '',
    aoScore: 0,
  };

  setTime(seconds: number) {
    this.matchTime = seconds;
  }

  aoScore(aoPoint: number) {
    this.scoreAo += aoPoint;
    this.history.push(aoPoint);
    // this.scoreAo.emit(this.history);
    this.statsService.addScore(this.scoreAo);
  }

  akaScore(akaPoint: number) {
    this.scoreAka += akaPoint;
    this.history.push(akaPoint);

    this.statsService.addScore(this.scoreAka);
    console.table(this.statsService.getStats());
  }

  categoryOneAka() {
    this.akaCategoryOne += 1;

    if (this.akaCategoryOne > 4) {
      this.akaCategoryOne -= this.akaCategoryOne;
    }
  }
  categoryTwoAka() {
    this.akaCategoryTwo += 1;
    if (this.akaCategoryTwo > 4) {
      this.akaCategoryTwo -= this.akaCategoryTwo;
    }
  }

  categoryOneAo() {
    this.aoCategoryOne += 1;
    if (this.aoCategoryOne > 4) {
      this.aoCategoryOne -= this.aoCategoryOne;
    }
  }
  categoryTwoAo() {
    this.aoCategoryTwo += 1;
    if (this.aoCategoryTwo > 4) {
      this.aoCategoryTwo -= this.aoCategoryTwo;
    }
  }

  resetPaneltyAka() {
    this.akaCategoryOne -= this.akaCategoryOne;
    this.akaCategoryTwo -= this.akaCategoryTwo;
  }
  resetPaneltyAo() {
    this.aoCategoryOne -= this.aoCategoryOne;
    this.aoCategoryTwo -= this.aoCategoryTwo;
  }

  akaScoreMinus() {
    const lastPoint = this.history.pop();
    if (lastPoint !== undefined) {
      this.scoreAka -= lastPoint;
    }
  }

  aoScoreMinus() {
    const lastPoint = this.history.pop();
    if (lastPoint !== undefined) {
      this.scoreAo -= lastPoint;
    }
  }

  onClick() {
    this.enable = true;
  }

  playSound() {
    let audio = new Audio();
    audio.src = '../../../../assets/Yamate.mp3';
    audio.play();
  }

  onReset() {
    Swal.fire({
      title: 'Do you want to Reset Score?',
      showDenyButton: true,
      background: "black",
      showCancelButton: true,
      confirmButtonText: 'Save Score',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
            this.enable = false;
            this.akaCategoryOne = 0;
            this.akaCategoryTwo = 0;
            this.aoCategoryOne = 0;
            this.aoCategoryTwo = 0;
            this.scoreAka = 0;
            this.scoreAo = 0;
            this.matchTime = 0;
      } else if (result.isDenied) {
        Swal.fire('Score are not saved', '', 'info');
      }
    });

  }
}
