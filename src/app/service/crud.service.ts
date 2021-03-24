import { Injectable } from '@angular/core';
import {catchError,map} from 'rxjs/operators'
import {Observable,throwError} from 'rxjs'
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http'

export class Book {
  _id!:String;
  name!:String;
  price!:String;
  description!:String;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  
  constructor() { }

  // AddBook(data:Book):Observable<any>{
  // return this.
  // }
}
