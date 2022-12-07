import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormModalComponent } from './contact-form-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactFormModalComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [ContactFormModalComponent],
})
export class ContactFormModalModule {}
