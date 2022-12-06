import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    let contacts: Contact[] = [
      {
        id: '1',
        firstName: 'Tony',
        lastName: 'Stark',
      },
      {
        id: '2',
        firstName: 'Steve',
        lastName: 'Rodgers',
      },
    ];

    return { contacts };
  }
}

export const API_URL = 'http://localhost:8080/api';
