import { Injectable, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ContactFormModalComponent } from '../components/contact-form-modal/contact-form-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ContactFormModalService {
  public modalRef: BsModalRef;

  constructor(public bsModalService: BsModalService) {}

  public showModal(templateRef: TemplateRef<ContactFormModalComponent>): void {
    const modalConfig: ModalOptions = {
      class: 'modal-lg',
    };
    this.modalRef = this.bsModalService.show(templateRef, modalConfig);
  }

  public hideModal(): void {
    this.bsModalService.hide();
  }
}
