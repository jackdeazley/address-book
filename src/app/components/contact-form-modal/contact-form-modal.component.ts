import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactFormModalService } from 'src/app/services/contact-form-modal.service';

@Component({
  selector: 'app-contact-form-modal',
  templateUrl: './contact-form-modal.component.html',
  styleUrls: ['./contact-form-modal.component.scss'],
})
export class ContactFormModalComponent implements OnInit {
  @Input() contactToEdit?: Contact;

  constructor(public modalService: ContactFormModalService) {}

  public ngOnInit(): void {
    if (this.contactToEdit) {
      console.log('in Modal', this.contactToEdit);
    }
  }

  public hideModal(): void {
    this.modalService.hideModal();
  }
}
