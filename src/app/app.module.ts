import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data-service.service';

import { AppComponent } from './app.component';
import { ContactService } from './services/contacts.service';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchContactsModule } from './components/search-contacts/search-contacts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule,
    FontAwesomeModule,
    SearchContactsModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
