import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    let contacts: Contact[] = MOCK_DATA;

    return { contacts };
  }
}

export const MOCK_DATA = [
  {
    id: '1',
    firstName: 'Tony',
    lastName: 'Stark',
    phoneNumber: 12345678,
    email: 'parkers-dad@starkindustries.com',
  },
  {
    id: '2',
    firstName: 'Steve',
    lastName: 'Rodgers',
    phoneNumber: 12343428,
    email: 'captainamerica@america.com',
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
    email: 'big-green-guy@yahoo.com',
  },
  {
    id: '5',
    firstName: 'Thor',
    lastName: 'Odinson',
    phoneNumber: 11974528,
    email: 'strongest-avenger@asgardmail.com',
  },
  {
    id: '6',
    firstName: 'Peter',
    lastName: 'Parker',
    phoneNumber: 37452691,
    email: 'friendly-neighbourhood-spider@starkindustries.com',
  },
  {
    id: '7',
    firstName: "King T'Challa",
    lastName: '',
    phoneNumber: 47629382,
    email: 'black-panther@wakandaforever.com',
  },
];

export const API_URL = 'http://localhost:8080/api';
