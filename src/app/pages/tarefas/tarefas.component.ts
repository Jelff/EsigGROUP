import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './tarefa.service';
import { Tarefa } from '../../api/tarefa';
import { NovaTarefaModalComponent } from '../../shared/nova-tarefa-modal/nova-tarefa-modal.component';
import { ConfirmacaoModalComponent } from '../../shared/confirmacao-modal/confirmacao-modal.component';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NovaTarefaModalComponent,
    ConfirmacaoModalComponent,
  ]
})
export class TarefasComponent implements OnInit {
  tarefas: Tarefa[] = [];
  showModal: boolean = false;
  private tarefaService = inject(TarefaService);
  tarefaEditando?: Tarefa;
  showConfirmacaoModal = false;
  tarefaParaRemover: Tarefa | null = null; 

  ngOnInit(): void {
    this.getTarefas();
  }

  getTarefas(): void {
    this.tarefaService.getTarefas()
      .subscribe((tarefas: Tarefa[]) => this.tarefas = tarefas);
  }

  novaTarefa() {
    this.showModal = true;
    this.tarefaEditando = { id: undefined, titulo: '', detalhes: '', deadline: null, prioridade: '', responsaveis: [], projeto: '', status: '' };
  }

  abrirConfirmacaoModal(tarefa: Tarefa) {
    this.tarefaParaRemover = tarefa; 
    this.showConfirmacaoModal = true; 
  }

 
  confirmarRemocao() {
    if (this.tarefaParaRemover) {
      this.tarefas = this.tarefas.filter(t => t !== this.tarefaParaRemover);
      this.tarefaParaRemover = null; 
    }
    this.showConfirmacaoModal = false;
  }

  cancelarRemocao() {
    this.tarefaParaRemover = null; 
    this.showConfirmacaoModal = false; 
  }


  removerTarefa(id: number): void {
    this.tarefaService.deleteTarefa(id)
      .subscribe(() => {
        this.tarefas = this.tarefas.filter(t => t.id !== id);
      });
  }

  editarTarefa(tarefa: Tarefa): void {
    this.tarefaEditando = { ...tarefa };
  }

  salvarTarefa(tarefa: Tarefa): void {
    if (tarefa.id) {
      this.tarefaService.updateTarefa(tarefa)
        .subscribe(() => {
          const index = this.tarefas.findIndex(t => t.id === tarefa.id);
          if (index !== -1) {
            this.tarefas[index] = tarefa;
          }
        });
    } else {
      this.tarefaService.addTarefa(tarefa)
        .subscribe((novaTarefa: Tarefa) => {
          this.tarefas.push(novaTarefa);
        });
    }
    this.tarefaEditando = undefined; 
  }

  cancelarEdicao(): void {
    this.showModal = false;
    this.tarefaEditando = undefined; 
  }
}
