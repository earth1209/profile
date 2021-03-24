import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDatailComponent } from './components/book-datail/book-datail.component';
import { BookListComponent } from './components/book-list/book-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component'
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BookDatailComponent,
    BookListComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPageScrollCoreModule.forRoot({ duration: 500 ,scrollOffset: 100})

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
