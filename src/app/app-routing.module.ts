import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDatailComponent } from './components/book-datail/book-datail.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'books-lsit', component: BookListComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'edit-book/:id', component: BookDatailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
