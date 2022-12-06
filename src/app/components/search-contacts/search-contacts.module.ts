import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContactsComponent } from './search-contacts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchContactsComponent],
  imports: [CommonModule, FormsModule],
  exports: [SearchContactsComponent],
})
export class SearchContactsModule {}
