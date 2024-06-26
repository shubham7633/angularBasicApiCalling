import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  fetchData(){
    return this.http.get<any>('https://dummyjson.com/products/1');
  }

}