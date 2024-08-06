import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './shared/nav-bar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent, 
    NavBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EsigGroup';
}
