import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TarefaService {
  private tarefasUrl = 'api/tarefas';  

  constructor(private http: HttpClient) { }

  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.tarefasUrl)
      .pipe(
        catchError(this.handleError<Tarefa[]>('getTarefas', []))
      );
  }

 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }
}

export interface Tarefa {
  id: number;
  titulo: string;
  detalhes: string;
  deadline: string;
  prioridade: string;
  responsaveis: string;
  projeto: string;
  status: string;
}
