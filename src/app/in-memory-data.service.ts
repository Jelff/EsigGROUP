import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tarefas = [
      { id: 1, titulo: 'Adjust concentrates',
        detalhes: 'To behavior and style testing',
        deadline: '2024-08-10',
        prioridade: 'Alta',
        responsaveis: ['Miles, Esther'],
        projeto: 'Gateway of Pacific',
        status: 'concluido' 
      },

      { id: 2, titulo: 'Initiation/Planning Activities',
        detalhes: 'Completed',
        deadline: '2024-08-11',
        prioridade: 'Média',
        responsaveis: ['Miles, Esther'],
        projeto: 'Renoir Hotel Fire Alarm',
        status: 'concluido' 
      },

      { id: 3,
        titulo: 'Requirements Analysis',
        detalhes: 'Completed',
        deadline: '2024-08-12',
        prioridade: 'Baixa',
        responsaveis: ['Miles, Esther'],
        projeto: 'Grand Hyatt Union Square',
        status: 'concluido' 
      },

      { id: 4,
        titulo: 'Security Planning',
        detalhes: '',
        deadline: '2024-08-13',
        prioridade: 'Alta',
        responsaveis: ['Miles, Esther'],
        projeto: '801 Brannan',
        status: 'concluido' 
      }
    ];

    return { tarefas };
  }
}
