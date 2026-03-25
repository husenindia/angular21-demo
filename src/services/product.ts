import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private apiUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) { }

  // For now use test endpoint (no DB)
  getTest() {
    return this.http.get(`${this.apiUrl}/test`, { responseType: 'text' });
  }


}
