import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
@NgModule({
  declarations: [ContactsListComponent],
  imports: [CommonModule, AccordionModule],
  exports: [ContactsListComponent],
})
export class ContactsListModule {}
