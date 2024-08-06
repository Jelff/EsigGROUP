import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/navbar.component';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
