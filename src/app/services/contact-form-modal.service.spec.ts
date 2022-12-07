import { TemplateRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ModalModule, ModalOptions } from 'ngx-bootstrap/modal';
import { ContactFormModalComponent } from '../components/contact-form-modal/contact-form-modal.component';

import { ContactFormModalService } from './contact-form-modal.service';

describe('ContactFormModalService', () => {
  let service: ContactFormModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalModule.forRoot()],
    });
    service = TestBed.inject(ContactFormModalService);
  });

  it('CFMS001 - should open the modal', () => {
    // arrange
    const modalConfig: ModalOptions = {
      class: 'modal-lg',
    };

    const templateRef: TemplateRef<ContactFormModalComponent> = {
      elementRef: {},
    } as TemplateRef<ContactFormModalComponent>;

    const spyOnModalRef = spyOn(service.bsModalService, `show`);
    // act
    service.showModal(templateRef);
    // assert
    expect(spyOnModalRef).toHaveBeenCalledWith(templateRef, modalConfig);
  });

  it('CFMS002 - should open the modal', () => {
    // arrange
    const spyOnModalRef = spyOn(service.bsModalService, `hide`);
    // act
    service.hideModal();
    // assert
    expect(spyOnModalRef).toHaveBeenCalled();
  });
});
