import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedContactComponent } from './selected-contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SelectedContactComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [SelectedContactComponent],
})
export class SelectedContactModule {}
