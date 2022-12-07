import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ContactFormModalService } from 'src/app/services/contact-form-modal.service';

import { ContactFormModalComponent } from './contact-form-modal.component';

describe('ContactFormModalComponent', () => {
  let component: ContactFormModalComponent;
  let fixture: ComponentFixture<ContactFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactFormModalComponent],
      providers: [ContactFormModalService],
      imports: [ModalModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
