import { TestBed } from '@angular/core/testing';
import { Contact } from '../models/contact.model';
import { DataService, MOCK_DATA } from './data-service.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should create mock database within createDB function ', () => {
    // arrange
    const contacts: Contact[] = MOCK_DATA;
    // act
    const database = service.createDb();

    // assert
    expect(database).toEqual({ contacts });
  });
});
