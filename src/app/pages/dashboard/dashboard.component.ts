import { Component } from '@angular/core';
import { NovaTarefaModalComponent } from '../../shared/nova-tarefa-modal/nova-tarefa-modal.component';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NovaTarefaModalComponent,
    NgxEchartsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
