import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data-service.service';

import { AppComponent } from './app.component';
import { ContactService } from './services/contacts.service';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchContactsModule } from './components/search-contacts/search-contacts.module';
import { ContactsListModule } from './components/contacts-list/contacts-list.module';
import { SelectedContactModule } from './components/selected-contact/selected-contact.module';
import { ContactFormModalModule } from './components/contact-form-modal/contact-form-modal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(DataService, { put204: false }),
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule,
    FontAwesomeModule,
    SearchContactsModule,
    ContactsListModule,
    SelectedContactModule,
    ContactFormModalModule,
    ModalModule.forRoot(),
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
