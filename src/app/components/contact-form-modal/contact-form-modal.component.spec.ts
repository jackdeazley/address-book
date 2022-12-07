import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { of } from 'rxjs';
import { ContactFormModalService } from 'src/app/services/contact-form-modal.service';
import { ContactService } from 'src/app/services/contacts.service';
import { MOCK_DATA } from 'src/app/services/data-service.service';

import { ContactFormModalComponent } from './contact-form-modal.component';

describe('ContactFormModalComponent', () => {
  let component: ContactFormModalComponent;
  let fixture: ComponentFixture<ContactFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactFormModalComponent],
      providers: [ContactFormModalService, ContactService],
      imports: [
        ModalModule.forRoot(),
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('CFMC001 - should setup the add contact form', () => {
      // arrange
      const contactForm = new FormGroup({
        id: new FormControl(''),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        phoneNumber: new FormControl(null),
        email: new FormControl('', Validators.email),
      });

      const spyOnBuildForm = spyOn(
        component.contactFormModalService,
        `buildContactForm`
      ).and.returnValue(contactForm);

      // act
      component.ngOnInit();

      // assert
      expect(spyOnBuildForm).toHaveBeenCalled();
      expect(component.contactForm).toEqual(contactForm);
    });
  });

  describe('onSubmitForm', () => {
    it('CFC002 - will submit a new contact', () => {
      // arrange
      component.contactForm = {
        value: true,
        valid: true,
        patchValue({}) {},
      } as FormGroup;

      const spyOnAddContact = spyOn(
        component.contactService,
        `createContact`
      ).and.returnValue(of(true));

      const spyOnEmit = spyOn(component.submittedForm, 'emit');

      const spyOnHideModal = spyOn(component, `hideModal`);

      // act
      component.onSubmitForm();

      // assert
      expect(spyOnAddContact).toHaveBeenCalled();
      expect(spyOnEmit).toHaveBeenCalled();
      expect(spyOnHideModal).toHaveBeenCalled();
    });

    it('CFC003 - will submit a edited contact', () => {
      // arrange
      component.contactForm = {
        value: true,
        valid: true,
        patchValue({}) {},
      } as FormGroup;

      component.contactToEdit = {
        id: '1',
        firstName: 'Jack',
        lastName: 'Deazley',
      };
      const spyOnUpdateContact = spyOn(
        component.contactService,
        `updateContact`
      ).and.returnValue(of(true));

      const spyOnEmit = spyOn(component.submittedForm, 'emit');

      const spyOnHideModal = spyOn(component, `hideModal`);

      // act
      component.onSubmitForm();

      // assert
      expect(spyOnUpdateContact).toHaveBeenCalled();
      expect(spyOnEmit).toHaveBeenCalled();
      expect(spyOnHideModal).toHaveBeenCalled();
    });
  });

  describe('hideModal', () => {
    it('should hide the modal', () => {
      // arrange
      const spyOnHideModal = spyOn(
        component.contactFormModalService,
        `hideModal`
      );
      // act
      component.hideModal();
      // assert
      expect(spyOnHideModal).toHaveBeenCalled();
    });
  });
});
