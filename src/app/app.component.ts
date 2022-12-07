import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { faAdd, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { delay, takeUntil, timer } from 'rxjs';
import { ContactFormModalComponent } from './components/contact-form-modal/contact-form-modal.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { SelectedContactComponent } from './components/selected-contact/selected-contact.component';
import { ToasterAlertComponent } from './components/toaster-alert/toaster-alert.component';
import { Contact } from './models/contact.model';
import { ContactFormModalService } from './services/contact-form-modal.service';
import { ContactService } from './services/contacts.service';
import {
  ToasterAlertModel,
  ToasterAlertService,
} from './services/toaster-alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('contactList') contactList: ContactsListComponent;
  @ViewChild('selectedContactComponent')
  selectedContactComponent: SelectedContactComponent;
  @ViewChild('formModalComponent')
  formModalComponent: ContactFormModalComponent;

  public contacts: Contact[] = [];
  public contactToEdit?: Contact;
  public isLoading: boolean = true;

  public isCollapsed: boolean = true;
  public isSelectedContactVisible: boolean = false;

  public searchIcon = faSearch;
  public addIcon = faAdd;

  public showToasterAlert: boolean = false;
  public toasterAlertModel: ToasterAlertModel;

  constructor(
    public contactService: ContactService,
    private modalService: ContactFormModalService,
    private toasterService: ToasterAlertService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
    this.listenForToasterAlert();
  }

  public listenForToasterAlert(): void {
    this.toasterService.toasterAlert$.subscribe((toasterModel) => {
      if (toasterModel.toasterType) {
        this.toasterAlertModel = toasterModel;
      }

      this.showToasterAlert = toasterModel.showToaster;
    });
  }

  public getHeroes(heroName?: string): void {
    this.isLoading = true;
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
          this.isLoading = false;
          localStorage.setItem('contacts', JSON.stringify(contacts));
          this.isSelectedContactVisible = false;
        });
    }
  }

  public setSelectedContact(contact: Contact): void {
    if (!contact.contactImageUrl) {
      this.selectedContactComponent.createContactIcon(contact);
    }

    this.selectedContactComponent.selectedContact = contact;
    this.isSelectedContactVisible = true;
  }

  public openContactFormModal(
    modalTemplate: TemplateRef<ContactFormModalComponent>,
    contactToEdit?: Contact
  ): void {
    if (contactToEdit) {
      this.contactToEdit = contactToEdit;
    } else {
      this.contactToEdit = undefined;
    }

    this.modalService.showModal(modalTemplate);
  }
}

export enum SortingType {
  LAST_NAME = 'lastName',
  FIRST_NAME = 'firstName',
}
