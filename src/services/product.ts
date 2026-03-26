import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { ProductModel } from '../model/product';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private apiUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }

  // For now use test endpoint (no DB)
  getTest() {
    return this.http.get(`${this.apiUrl}/api/products/test`, { responseType: 'text' });
  }
  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.apiUrl}/api/products`).pipe(
      shareReplay(1) // cache within app lifecycle
    );;
  }


}
