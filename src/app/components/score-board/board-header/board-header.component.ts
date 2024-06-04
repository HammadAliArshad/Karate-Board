import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountdownModule } from 'ngx-countdown';

@Component({
  selector: 'app-board-header',
  standalone: true,
  imports: [CountdownModule, RouterLink],
  templateUrl: './board-header.component.html',
  styleUrl: './board-header.component.scss',
})
export class BoardHeaderComponent {
  score: any = 0;
  matchTime: any = 180;

  setNinty(){
    this.matchTime = 90;
  }
  setTwo(){
    this.matchTime = 120;
  }
  setThree(){
    this.matchTime = 180;
  }


}
