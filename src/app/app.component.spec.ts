import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TemplateRef } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { of, Subscription, takeUntil } from 'rxjs';
import { AppComponent } from './app.component';
import { ContactFormModalComponent } from './components/contact-form-modal/contact-form-modal.component';
import { ContactFormModalModule } from './components/contact-form-modal/contact-form-modal.module';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsListModule } from './components/contacts-list/contacts-list.module';
import { SearchContactsModule } from './components/search-contacts/search-contacts.module';
import { SelectedContactComponent } from './components/selected-contact/selected-contact.component';
import { SelectedContactModule } from './components/selected-contact/selected-contact.module';
import { Contact } from './models/contact.model';
import { ContactService } from './services/contacts.service';
import { MOCK_DATA } from './services/data-service.service';
import {
  ToasterAlertModel,
  ToasterAlertType,
} from './services/toaster-alert.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HttpClientTestingModule,
        FontAwesomeModule,
        SearchContactsModule,
        SelectedContactModule,
        ContactFormModalModule,
        ContactsListModule,
        CollapseModule,
        BrowserAnimationsModule,
        ModalModule.forRoot(),
      ],
      providers: [ContactService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('getHeroes', () => {
    it('AC001 - should get the default array from mock db', fakeAsync(() => {
      // arrange
      const contacts = MOCK_DATA;

      const spyOnGetContacts = spyOn(
        component.contactService,
        'getContacts'
      ).and.returnValue(of(contacts));

      // act
      component.getHeroes();
      tick(600);

      // assert
      expect(spyOnGetContacts).toHaveBeenCalled();
      expect(component.contacts).toEqual(contacts);
      expect(component.isLoading).toBeFalse();
    }));

    it('AC002 - should filter the existing array', () => {
      // arrange

      const contactList = [
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
        {
          id: '3',
          firstName: 'Carol',
          lastName: 'Danvers',
        },
      ];

      component.contacts = contactList;

      component.contactList = {
        contacts: contactList,
      } as ContactsListComponent;

      // act
      component.getHeroes('Ca');

      // assert
      expect(component.contactList.contacts).toEqual([contactList[2]]);
    });
  });

  describe('ngOnInit', () => {
    it('AC003 - should call the getHeroes method', () => {
      // arrange
      const spyOnGetHeroes = spyOn(component, 'getHeroes');

      // act
      component.ngOnInit();

      // assert
      expect(spyOnGetHeroes).toHaveBeenCalled();
    });
  });

  describe('listenForToasterAlert', () => {
    it('AC004 - should retrieve toasterAlertModel', () => {
      // arrange
      const toasterAlertModel: ToasterAlertModel = {
        toasterType: ToasterAlertType.SUCCESS,
        showToaster: true,
        message: 'Message',
      };
      const spyOnGetToaster = spyOn(
        component['toasterService'].toasterAlert$,
        'subscribe'
      );

      // act
      component.listenForToasterAlert();
      component['toasterService'].toasterAlert$.next(toasterAlertModel);

      // assert
      expect(spyOnGetToaster).toHaveBeenCalled();
      expect(component.showToasterAlert).toBeTrue();
      expect(component.toasterAlertModel).toEqual(toasterAlertModel);
    });
  });

  describe('openContactFormModal', () => {
    it('AC005 - should open add new contact modal', () => {
      // arrange
      const spyOnShowModal = spyOn(component['modalService'], 'showModal');

      const templateRef: TemplateRef<ContactFormModalComponent> = {
        elementRef: {},
      } as TemplateRef<ContactFormModalComponent>;

      // act
      component.openContactFormModal(templateRef);

      // assert
      expect(spyOnShowModal).toHaveBeenCalled();
      expect(component.contactToEdit).toBeUndefined();
    });

    it('AC006 - should open update contact modal', () => {
      // arrange
      const spyOnShowModal = spyOn(component['modalService'], 'showModal');

      const templateRef: TemplateRef<ContactFormModalComponent> = {
        elementRef: {},
      } as TemplateRef<ContactFormModalComponent>;

      const contactToEdit: Contact = {
        id: '1',
        firstName: 'Jack',
        lastName: 'Deaz',
      };

      // act
      component.openContactFormModal(templateRef, contactToEdit);

      // assert
      expect(spyOnShowModal).toHaveBeenCalled();
      expect(component.contactToEdit).toEqual(contactToEdit);
    });
  });

  it('AC007 - setSelectedContact will set the selected contact', () => {
    // arrange
    const contact: Contact = {
      id: '1',
      firstName: 'Jack',
      lastName: 'Deazley',
    };

    component.selectedContactComponent = {
      createContactIcon(contact) {},
      selectedContact: { id: '', firstName: '', lastName: '' },
    } as SelectedContactComponent;

    const spyOnCreateIcon = spyOn(
      component.selectedContactComponent,
      `createContactIcon`
    );

    // act
    component.setSelectedContact(contact);

    // assert
    expect(spyOnCreateIcon).toHaveBeenCalledOnceWith(contact);
    expect(component.selectedContactComponent.selectedContact).toEqual(contact);
    expect(component.isSelectedContactVisible).toBeTrue();
  });
});
