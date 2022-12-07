import { Component, EventEmitter, Output } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-selected-contact',
  templateUrl: './selected-contact.component.html',
  styleUrls: ['./selected-contact.component.scss'],
})
export class SelectedContactComponent {
  @Output() openModal: EventEmitter<Contact> = new EventEmitter<Contact>();
  public selectedContact: Contact;

  public contactInitials: string;
  public phoneIcon = faPhone;
  public emailIcon = faEnvelope;

  public createContactIcon(contact: Contact): void {
    const firstInitial = contact.firstName.charAt(0);
    const secondInitial = contact.lastName.charAt(0);

    this.contactInitials = `${firstInitial}${secondInitial}`;
  }

  public onOpenContactModal(selectedContact: Contact): void {
    this.openModal.emit(selectedContact);
  }
}
