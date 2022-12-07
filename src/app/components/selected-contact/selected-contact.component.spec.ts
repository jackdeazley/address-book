import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';

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

  it('will create the contacts icon', () => {
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
});
