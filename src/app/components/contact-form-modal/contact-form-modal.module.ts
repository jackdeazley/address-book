import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormModalComponent } from './contact-form-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactFormModalComponent],
  imports: [CommonModule, FormsModule],
  exports: [ContactFormModalComponent],
})
export class ContactFormModalModule {}
