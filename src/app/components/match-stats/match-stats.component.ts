import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-match-stats',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './match-stats.component.html',
  styleUrl: './match-stats.component.scss',
})
export class MatchStatsComponent {


  players = [
    {
      number: 1,
      playerNameAka: 'John Doe',
      scoreAka: 50,
      playerNameAo: 'Jane Smith',
      scoreAo: 45,
      winner: '',
    },
    {
      number: 2,
      playerNameAka: 'Alice Brown',
      scoreAka: 30,
      playerNameAo: 'Bob Johnson',
      scoreAo: 60,
      winner: '',
    },
    {
      number: 3,
      playerNameAka: 'Michael White',
      scoreAka: 70,
      playerNameAo: 'Emily Davis',
      scoreAo: 55,
      winner: '',
    },
    {
      number: 4,
      playerNameAka: 'Waqar',
      scoreAka: 70,
      playerNameAo: 'Hammad',
      scoreAo: 55,
      winner: '',
    },
    // Add more players as needed
  ];
}
