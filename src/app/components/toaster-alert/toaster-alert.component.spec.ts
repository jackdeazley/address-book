import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterAlertComponent } from './toaster-alert.component';

describe('ToasterAlertComponent', () => {
  let component: ToasterAlertComponent;
  let fixture: ComponentFixture<ToasterAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToasterAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToasterAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
