import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountdownModule } from 'ngx-countdown';

@Component({
  selector: 'app-board-header',
  standalone: true,
  imports: [CountdownModule, RouterLink, NgIf, NgClass],
  templateUrl: './board-header.component.html',
  styleUrl: './board-header.component.scss',
})
export class BoardHeaderComponent {
  scoreAka: any = 0;
  scoreAo: any = 0;
  matchTime: any = 180;
  currentFoul: any = 0;
  akaCategoryOne: any = 0;
  akaCategoryTwo: any = 0;
  aoCategoryOne: any = 0;
  aoCategoryTwo: any = 0;

  setTime(seconds: number) {
    this.matchTime = seconds;
  }

  aoScore(aoPoint: number) {
    this.scoreAo += aoPoint;
  }

  akaScore(akaPoint: number) {
    this.scoreAka += akaPoint;
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
}
