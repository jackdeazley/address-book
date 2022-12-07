import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
import { ContactFormModalService } from 'src/app/services/contact-form-modal.service';
import { ContactService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-form-modal',
  templateUrl: './contact-form-modal.component.html',
  styleUrls: ['./contact-form-modal.component.scss'],
})
export class ContactFormModalComponent implements OnInit {
  @Input() contactToEdit?: Contact;
  @Output() submittedForm: EventEmitter<any> = new EventEmitter<any>();

  public contactForm: FormGroup;

  constructor(
    public contactFormModalService: ContactFormModalService,
    public contactService: ContactService
  ) {}

  public ngOnInit(): void {
    this.contactForm = this.contactFormModalService.buildContactForm();

    if (this.contactToEdit) {
      this.contactForm.patchValue({
        id: this.contactToEdit.id,
        firstName: this.contactToEdit.firstName,
        lastName: this.contactToEdit.lastName,
        phoneNumber: this.contactToEdit.phoneNumber,
        email: this.contactToEdit.email,
      });
    }
  }

  public onSubmitForm(): void {
    if (this.contactToEdit) {
      this.contactService
        .updateContact(this.contactForm.value)
        .subscribe(() => {
          this.submittedForm.emit();
          this.contactFormModalService.hideModal();
        });
    } else {
      this.contactForm.patchValue({
        id: Math.random().toFixed().toString(),
      });
      this.contactService
        .createContact(this.contactForm.value)
        .subscribe((newContact) => {
          this.submittedForm.emit();
          this.contactFormModalService.hideModal();
        });
    }
  }

  public hideModal(): void {
    this.contactFormModalService.hideModal();
  }
}
