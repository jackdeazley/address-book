import { TestBed } from '@angular/core/testing';
import { Contact } from '../models/contact.model';
import { DataService } from './data-service.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should create mock database within createDB function ', () => {
    // arrange
    const contacts: Contact[] = [
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
    // act
    const database = service.createDb();

    // assert
    expect(database).toEqual({ contacts });
  });
});
