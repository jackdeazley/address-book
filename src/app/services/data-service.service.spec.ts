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
      },
      {
        id: '2',
        firstName: 'Steve',
        lastName: 'Rodgers',
      },
    ];
    // act
    const database = service.createDb();

    // assert
    expect(database).toEqual({ contacts });
  });
});
