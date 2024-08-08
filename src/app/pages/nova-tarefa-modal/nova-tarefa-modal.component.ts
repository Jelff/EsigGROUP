// nova-tarefa-modal.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nova-tarefa-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nova-tarefa-modal.component.html',
  styleUrls: ['./nova-tarefa-modal.component.css']
})
export class NovaTarefaModalComponent {
  titulo: string = '';
  detalhes: string = '';
  deadline: Date | null = null;
  prioridade: string = '';
  responsaveis: string[] = [];
  arquivoSelecionado: File | null = null;
  

  criarTarefa() {
    console.log('Tarefa criada:', {
      titulo: this.titulo,
      detalhes: this.detalhes,
      deadline: this.deadline,
      prioridade: this.prioridade,
      responsaveis: this.responsaveis,
      arquivo: this.arquivoSelecionado
    });
  }

  cancelar() {
    this.titulo = '';
    this.detalhes = '';
    this.deadline = null;
    this.prioridade = '';
    this.responsaveis = [];
  }

  onFileSelected(event: any) {
    this.arquivoSelecionado = event.target.files[0];
    console.log('Arquivo selecionado:', this.arquivoSelecionado);
  }
}
