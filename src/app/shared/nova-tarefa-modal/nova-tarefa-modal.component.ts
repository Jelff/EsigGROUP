import { Component, Input, Output, EventEmitter, ViewEncapsulation  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tarefa } from '../../api/tarefa';

@Component({
  selector: 'app-nova-tarefa-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nova-tarefa-modal.component.html',
  styleUrls: ['./nova-tarefa-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NovaTarefaModalComponent {
  @Input() tarefa?: Tarefa;
  @Output() salvar = new EventEmitter<Tarefa>();
  @Output() cancelar = new EventEmitter<void>();

  titulo: string = '';
  detalhes: string = '';
  deadline: Date | null = null;
  prioridade: string = '';
  responsaveis: string[] = [];
  status: string = '';
  projeto: string = '';
  responsaveisInput: string = '';

  ngOnChanges(): void {
    if (this.tarefa) {
      this.titulo = this.tarefa.titulo;
      this.detalhes = this.tarefa.detalhes;
      this.deadline = this.tarefa.deadline ? new Date(this.tarefa.deadline) : null; 
      this.prioridade = this.tarefa.prioridade;
      this.responsaveis = Array.isArray(this.tarefa.responsaveis) ? this.tarefa.responsaveis : [this.tarefa.responsaveis];
      this.status = this.tarefa.status;
    } else {
      this.resetForm();
    }
  }
  
  criarTarefa() {
    const tarefa: Tarefa = {
      id: this.tarefa ? this.tarefa.id : undefined,
      titulo: this.titulo,
      detalhes: this.detalhes,
      deadline: this.deadline,
      prioridade: this.prioridade,
      responsaveis: this.responsaveis,
      projeto: this.projeto,
      status: this.status
    };
    console.log('Tarefa criada:', tarefa); 
    this.salvar.emit(tarefa);
    this.resetForm();
  }

  updateResponsaveis(value: string) {
    this.responsaveisInput = value;
    this.responsaveis = value.split(',').map(item => item.trim()).filter(item => item !== '');
  }

  resetForm() {
    this.titulo = '';
    this.detalhes = '';
    this.deadline = null;
    this.prioridade = '';
    this.responsaveis = [];
    this.status = '';
  }

  fecharModal() {
    this.resetForm();
    this.cancelar.emit();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('Arquivo selecionado:', file.name);
    }
  }
}
