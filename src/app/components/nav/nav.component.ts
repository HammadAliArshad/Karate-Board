import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, SweetAlert2Module],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {

}
