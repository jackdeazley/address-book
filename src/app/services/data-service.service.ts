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
        phoneNumber: 12345678,
      },
      {
        id: '2',
        firstName: 'Steve',
        lastName: 'Rodgers',
        phoneNumber: 12343428,
      },
      {
        id: '3',
        firstName: 'Carol',
        lastName: 'Danvers',
        phoneNumber: 59225678,
      },
      {
        id: '4',
        firstName: 'Bruce',
        lastName: 'Banner',
      },
      {
        id: '5',
        firstName: 'Thor',
        lastName: 'Odinson',
        phoneNumber: 11974528,
      },
    ];

    return { contacts };
  }
}

export const API_URL = 'http://localhost:8080/api';
