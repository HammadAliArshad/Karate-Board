import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardNavComponent } from '../board-nav/board-nav.component';
import { BoardHeaderComponent } from '../board-header/board-header.component';
import { ScoreCard } from '../../../models/scorecard.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [RouterOutlet, BoardNavComponent, BoardHeaderComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

}
