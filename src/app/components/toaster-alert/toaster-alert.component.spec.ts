import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToasterAlertType } from 'src/app/services/toaster-alert.service';

import { ToasterAlertComponent } from './toaster-alert.component';

describe('ToasterAlertComponent', () => {
  let component: ToasterAlertComponent;
  let fixture: ComponentFixture<ToasterAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToasterAlertComponent],
      imports: [FontAwesomeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ToasterAlertComponent);
    component = fixture.componentInstance;

    component.toasterAlertModel = {
      toasterType: ToasterAlertType.SUCCESS,
      showToaster: true,
      message: 'Message',
    };
    fixture.detectChanges();
  });

  it('TAC001 - should close the modal', () => {
    // arrange
    const spyOnNext = spyOn(component.toasterService.toasterAlert$, `next`);
    // act
    component.closeToasterAlert();

    // assert
    expect(spyOnNext).toHaveBeenCalledWith({ showToaster: false });
  });
});
