import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-contacts',
  templateUrl: './search-contacts.component.html',
  styleUrls: ['./search-contacts.component.scss'],
})
export class SearchContactsComponent {
  public heroName: string;

  @Output() searchedHero: EventEmitter<string> = new EventEmitter<string>();

  public searchContacts(name: string) {
    this.searchedHero.emit(name);
  }
}
