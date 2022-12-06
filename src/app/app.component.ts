import { Component, OnInit, ViewChild } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { Contact } from './models/contact.model';
import { ContactService } from './services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('contactList') contactList: ContactsListComponent;

  public contacts: Contact[] = [];

  public isCollapsed = true;
  public faCoffee = faSearch;

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
      this.contactService.getContacts().subscribe((contacts) => {
        this.contacts = contacts;
      });
    }
  }
}

export enum SortingType {
  LAST_NAME = 'lastName',
  FIRST_NAME = 'firstName',
}
