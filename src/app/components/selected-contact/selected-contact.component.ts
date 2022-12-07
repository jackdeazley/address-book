import { Component, EventEmitter, Output } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-selected-contact',
  templateUrl: './selected-contact.component.html',
  styleUrls: ['./selected-contact.component.scss'],
})
export class SelectedContactComponent {
  @Output() openModal: EventEmitter<Contact> = new EventEmitter<Contact>();
  @Output() deleteContact: EventEmitter<any> = new EventEmitter<any>();

  public selectedContact: Contact;

  public contactInitials: string;
  public phoneIcon = faPhone;
  public emailIcon = faEnvelope;

  constructor(public contactService: ContactService) {}

  public createContactIcon(contact: Contact): void {
    const firstInitial = contact.firstName.charAt(0).toUpperCase();
    const secondInitial = contact.lastName.charAt(0).toUpperCase();

    this.contactInitials = `${firstInitial}${secondInitial}`;
  }

  public onOpenContactModal(selectedContact: Contact): void {
    this.openModal.emit(selectedContact);
  }

  public onDeleteContact(contact: Contact): void {
    this.contactService.deleteContact(contact.id).subscribe(() => {
      console.log('contact deleted!');
      this.deleteContact.emit();
    });
  }
}
