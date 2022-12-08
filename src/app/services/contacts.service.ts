import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { API_URL } from './data-service.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(public http: HttpClient) {}

  public getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${API_URL}/contacts`);
  }

  public getContact(contactId: string): Observable<Contact> {
    return this.http.get<Contact>(`${API_URL}/contacts/${contactId}`);
  }

  public createContact(contact: Contact) {
    return this.http.post(`${API_URL}/contacts`, contact);
  }

  public deleteContact(contactId: string) {
    return this.http.delete(`${API_URL}/contacts/${contactId}`);
  }

  public updateContact(contact: Contact) {
    return this.http.put(`${API_URL}/contacts/${contact.id}`, contact);
  }
}
