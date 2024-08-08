import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService, Tarefa } from './tarefa.service';
import { NovaTarefaModalComponent } from '../nova-tarefa-modal/nova-tarefa-modal.component';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NovaTarefaModalComponent,
  ]
})
export class TarefasComponent implements OnInit {
  tarefas: Tarefa[] = [];
  private tarefaService = inject(TarefaService);

  ngOnInit(): void {
    this.getTarefas();
  }

  getTarefas(): void {
    this.tarefaService.getTarefas()
      .subscribe((tarefas: Tarefa[]) => this.tarefas = tarefas);
  }
}
