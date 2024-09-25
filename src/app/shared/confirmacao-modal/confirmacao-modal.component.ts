import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmacao-modal',
  templateUrl: './confirmacao-modal.component.html',
  styleUrls: ['./confirmacao-modal.component.css'],
  standalone: true, 
  imports: [CommonModule] 
})
export class ConfirmacaoModalComponent {
  @Output() confirmado = new EventEmitter<void>();
  @Output() cancelado = new EventEmitter<void>();

  confirmar() {
    this.confirmado.emit();
  }

  fechar() {
    this.cancelado.emit(); 
  }
}
