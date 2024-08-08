import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/navbar.component';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TarefasComponent } from '../tarefas/tarefas.component';
import { NovaTarefaModalComponent } from '../nova-tarefa-modal/nova-tarefa-modal.component'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    RouterOutlet,
    RouterModule,
    CommonModule,
    DashboardComponent,
    TarefasComponent,
    NovaTarefaModalComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMenuCollapsed = false;

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
