import { TestBed } from '@angular/core/testing';
import { Contact } from '../models/contact.model';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ContactService } from './contacts.service';
import { API_URL } from './data-service.service';

describe('ContactsService', () => {
  let service: ContactService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactService],
    });
    service = TestBed.inject(ContactService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('CS001 - be able to retrieve contacts from the API bia GET', () => {
    const avengers: Contact[] = [
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
    service.getContacts().subscribe((contacts) => {
      expect(contacts.length).toBe(2);
      expect(contacts).toEqual(avengers);
    });
    const request = httpMock.expectOne(`${API_URL}/contacts`);
    expect(request.request.method).toBe('GET');
    request.flush(avengers);
  });

  it('CS002 - be able to get a specific contact from the API bia GET', () => {
    const avengers: Contact[] = [
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
    service.getContact('1').subscribe((contact) => {
      expect(contact).toEqual(avengers[0]);
    });

    const request = httpMock.expectOne(`${API_URL}/contacts/${avengers[0].id}`);
    expect(request.request.method).toBe('GET');
  });

  it('CS003 - be able to update a specific contact from the API bia PUT', () => {
    const avenger: Contact = {
      id: '1',
      firstName: 'Peter',
      lastName: 'Parker',
    };
    service.updateContact(avenger).subscribe((contact) => {
      expect(contact).toEqual(avenger);
    });

    const request = httpMock.expectOne(`${API_URL}/contacts/${avenger.id}`);
    expect(request.request.method).toBe('PUT');
  });

  it('CS004 - be able to update a specific contact from the API bia PUT', () => {
    const avenger: Contact = {
      id: '1',
      firstName: 'Peter',
      lastName: 'Parker',
    };
    service.updateContact(avenger).subscribe((contact) => {
      expect(contact).toEqual(avenger);
    });

    const request = httpMock.expectOne(`${API_URL}/contacts/${avenger.id}`);
    expect(request.request.method).toBe('PUT');
  });

  it('CS005 - be able to create a new contact from the API bia POST', () => {
    const avenger: Contact = {
      id: '1',
      firstName: 'Peter',
      lastName: 'Parker',
    };
    service.createContact(avenger).subscribe((contact) => {
      expect(contact).toEqual(avenger);
    });

    const request = httpMock.expectOne(`${API_URL}/contacts`);
    expect(request.request.method).toBe('POST');
  });

  it('CS006 - be able to delete a specific contact from the API bia DELETE', () => {
    const avenger: Contact = {
      id: '1',
      firstName: 'Peter',
      lastName: 'Parker',
    };
    service.deleteContact(avenger.id).subscribe((contact) => {
      expect(contact).toEqual(avenger);
    });

    const request = httpMock.expectOne(`${API_URL}/contacts/${avenger.id}`);
    expect(request.request.method).toBe('DELETE');
  });

  afterEach(() => {
    httpMock.verify();
  });
});
