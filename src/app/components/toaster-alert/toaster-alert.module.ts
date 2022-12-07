import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterAlertComponent } from './toaster-alert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ToasterAlertComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ToasterAlertComponent],
})
export class ToasterAlertModule {}
