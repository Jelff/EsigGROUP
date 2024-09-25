export interface Tarefa {
  id?: number;
  titulo: string;  
  detalhes: string;
  deadline: Date | null; 
  prioridade: string;
  responsaveis: string[];
  projeto: string;    
  status: string;     
}
