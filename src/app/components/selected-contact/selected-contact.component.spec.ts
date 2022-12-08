import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {
  ToasterAlertModel,
  ToasterAlertType,
} from 'src/app/services/toaster-alert.service';
import { Contact } from '../../models/contact.model';
import { of } from 'rxjs';
import { SelectedContactComponent } from './selected-contact.component';

describe('SelectedContactComponent', () => {
  let component: SelectedContactComponent;
  let fixture: ComponentFixture<SelectedContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectedContactComponent],
      imports: [HttpClientTestingModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SCC001 - will create the contacts icon', () => {
    // arrange
    const contact: Contact = {
      id: '1',
      firstName: 'Jack',
      lastName: 'Deazley',
    };

    // act
    component.createContactIcon(contact);

    // assert
    expect(component.contactInitials).toEqual('JD');
  });

  it('SCC002 - will open contact modal', () => {
    // arrange
    const spyOnEmit = spyOn(component.openModal, 'emit');

    const contact: Contact = {
      id: '1',
      firstName: 'Jack',
      lastName: 'Deazley',
    };

    // act
    component.onOpenContactModal(contact);

    // assert
    expect(spyOnEmit).toHaveBeenCalledOnceWith(contact);
  });

  it('SCC003 - will delete the contact', () => {
    // arrange
    const spyOnDeleteContact = spyOn(
      component.contactService,
      `deleteContact`
    ).and.returnValue(of(true));

    const contact: Contact = {
      id: '1',
      firstName: 'Jack',
      lastName: 'Deazlet',
    };
    const spyOnEmit = spyOn(component.deleteContact, 'emit');

    const toasterAlertModal: ToasterAlertModel = {
      showToaster: true,
      toasterType: ToasterAlertType.DELETE,
      message: `Contact Deleted`,
    };

    const spyOnNext = spyOn(component.toasterService.toasterAlert$, 'next');

    // act
    component.onDeleteContact(contact);

    // assert
    expect(spyOnDeleteContact).toHaveBeenCalledWith(contact.id);
    expect(spyOnEmit).toHaveBeenCalled();
    expect(spyOnNext).toHaveBeenCalledWith(toasterAlertModal);
  });
});
