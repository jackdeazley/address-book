import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, of, throwError } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactFormModalService } from 'src/app/services/contact-form-modal.service';
import { ContactService } from 'src/app/services/contacts.service';
import {
  ToasterAlertModel,
  ToasterAlertService,
  ToasterAlertType,
} from 'src/app/services/toaster-alert.service';

@Component({
  selector: 'app-contact-form-modal',
  templateUrl: './contact-form-modal.component.html',
  styleUrls: ['./contact-form-modal.component.scss'],
})
export class ContactFormModalComponent implements OnInit {
  @Input() contactToEdit?: Contact;
  @Output() submittedForm: EventEmitter<any> = new EventEmitter<any>();

  public contactForm: FormGroup;
  public hasSubmitted: boolean = false;

  constructor(
    public contactFormModalService: ContactFormModalService,
    public contactService: ContactService,
    public toasterService: ToasterAlertService
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
    this.hasSubmitted = true;
    if (this.contactForm.valid) {
      if (this.contactToEdit) {
        this.contactService
          .updateContact(this.contactForm.value)
          .subscribe(() => {
            this.submittedForm.emit();
            this.hideModal();
            const toasterAlertModal: ToasterAlertModel = {
              showToaster: true,
              toasterType: ToasterAlertType.SUCCESS,
              message: `Contact updated!`,
            };
            this.toasterService.toasterAlert$.next(toasterAlertModal);
          });
      } else {
        this.contactForm.patchValue({
          id: Math.random().toString(16).slice(2),
        });
        this.contactService
          .createContact(this.contactForm.value)
          .pipe(
            catchError((err) => {
              return throwError(() => new Error(err));
            })
          )
          .subscribe(() => {
            this.submittedForm.emit();
            this.hideModal();
            const toasterAlertModal: ToasterAlertModel = {
              showToaster: true,
              toasterType: ToasterAlertType.SUCCESS,
              message: `Contact added!`,
            };
            this.toasterService.toasterAlert$.next(toasterAlertModal);
          });
      }
    }
  }

  public hideModal(): void {
    this.contactFormModalService.hideModal();
  }
}
