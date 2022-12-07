import { Component, OnInit, ViewChild } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { delay } from 'rxjs';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { SelectedContactComponent } from './components/selected-contact/selected-contact.component';
import { Contact } from './models/contact.model';
import { ContactService } from './services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('contactList') contactList: ContactsListComponent;
  @ViewChild('selectedContactComponent')
  selectedContactComponent: SelectedContactComponent;

  public contacts: Contact[] = [];

  public isCollapsed = true;
  public searchIcon = faSearch;

  constructor(public contactService: ContactService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(heroName?: string): void {
    if (heroName) {
      const filteredArray = this.contacts.filter(
        (contact) =>
          contact.firstName.toLowerCase().includes(heroName.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(heroName.toLowerCase())
      );
      this.contactList.contacts = [...filteredArray];
    } else {
      this.contactService
        .getContacts()
        .pipe(delay(500))
        .subscribe((contacts) => {
          this.contacts = contacts;
        });
    }
  }

  public setSelectedContact(contact: Contact): void {
    if (!contact.contactImageUrl) {
      this.selectedContactComponent.createContactIcon(contact);
    }

    this.selectedContactComponent.selectedContact = contact;
  }
}

export enum SortingType {
  LAST_NAME = 'lastName',
  FIRST_NAME = 'firstName',
}
