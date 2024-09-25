import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tarefa } from '../../api/tarefa';


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

  addTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.tarefasUrl, tarefa)
      .pipe(
        catchError(this.handleError<Tarefa>('addTarefa'))
      );
  }
  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

  updateTarefa(tarefa: Tarefa): Observable<any> {
    return this.http.put(this.tarefasUrl, tarefa)
      .pipe(
        catchError(this.handleError<any>('updateTarefa'))
      );
  }
  
  deleteTarefa(id: number): Observable<Tarefa> {
    const url = `${this.tarefasUrl}/${id}`;
    return this.http.delete<Tarefa>(url)
      .pipe(
        catchError(this.handleError<Tarefa>('deleteTarefa'))
      );
  }
  
}

