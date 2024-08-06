import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ];
    return { items };
  }
}
