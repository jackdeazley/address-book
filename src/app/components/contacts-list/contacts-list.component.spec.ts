import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortingType } from 'src/app/app.component';
import { Contact } from 'src/app/models/contact.model';

import { ContactsListComponent } from './contacts-list.component';

describe('ContactsListComponent', () => {
  let component: ContactsListComponent;
  let fixture: ComponentFixture<ContactsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('CLC001 - it shoulder call the helper sort function to sort array', () => {
    // arrange
    component.contacts = [
      {
        id: '1',
        firstName: 'Thor',
        lastName: 'Odinson',
      },
      {
        id: '2',
        firstName: 'Peter',
        lastName: 'Parker',
      },
      {
        id: '3',
        firstName: 'Bruce',
        lastName: 'Banner',
      },
    ];

    const sortedContacts: Contact[] = [
      {
        id: '3',
        firstName: 'Bruce',
        lastName: 'Banner',
      },
      {
        id: '2',
        firstName: 'Peter',
        lastName: 'Parker',
      },
      {
        id: '1',
        firstName: 'Thor',
        lastName: 'Odinson',
      },
    ];

    const spyOnSortList = spyOn(component, 'sortArrayByName').and.returnValue(
      sortedContacts
    );

    // act
    component.sortContactList(SortingType.FIRST_NAME);

    // assert
    expect(spyOnSortList).toHaveBeenCalled();
    expect(component.contacts).toEqual(sortedContacts);
  });

  it('CLC002 - will sort the array by name', () => {
    // arrange
    const unsortedContacts: Contact[] = [
      {
        id: '1',
        firstName: 'Thor',
        lastName: 'Odinson',
      },
      {
        id: '2',
        firstName: 'Peter',
        lastName: 'Parker',
      },
      {
        id: '3',
        firstName: 'Bruce',
        lastName: 'Banner',
      },
    ];

    const sortedContacts: Contact[] = [
      {
        id: '3',
        firstName: 'Bruce',
        lastName: 'Banner',
      },
      {
        id: '2',
        firstName: 'Peter',
        lastName: 'Parker',
      },
      {
        id: '1',
        firstName: 'Thor',
        lastName: 'Odinson',
      },
    ];

    // act
    const result = component.sortArrayByName(
      SortingType.FIRST_NAME,
      unsortedContacts
    );

    // assert
    expect(result).toEqual(sortedContacts);
  });
});
