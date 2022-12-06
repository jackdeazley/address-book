import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SortingType } from 'src/app/app.component';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent {
  @Input() contacts: Contact[] = [];

  public contactDetails: string = 'contact-details';

  public sortingKeys = SortingType;

  // Another way to do it, but I prefer ViewChilds

  // public ngOnChanges(changes: SimpleChanges): void {
  //   // if (changes && changes['contacts']) {
  //   //   this.contacts = [...changes['contacts'].currentValue];
  //   // }
  // }

  public sortContactList(sortType: SortingType): void {
    this.contacts = this.sortArrayByName(sortType, this.contacts);
  }

  public sortArrayByName(
    sortProperty: SortingType,
    arrayToSort: Contact[]
  ): Contact[] {
    const sortedArray = arrayToSort.sort((a, b) => {
      const nameA = a[sortProperty].toLowerCase();
      const nameB = b[sortProperty].toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    return sortedArray;
  }
}
