import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Product } from '../../services/product';
import { ProductModel } from '../../model/product';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.sass',
})
export class Products {
  message$!: Observable<string>;

  products$!: Observable<ProductModel[]>;
  loading: boolean = false;


  constructor(private productService: Product, @Inject(PLATFORM_ID) private platformId: Object) {}


  ngOnInit() {
    this.message$ = this.productService.getTest();

    // SSR + Browser BOTH will call API
    this.products$ = this.productService.getProducts();

    // Optional debug
    if (isPlatformBrowser(this.platformId)) {
      // Force refresh again in browser
      this.productService.getProducts().subscribe();
    }

  }
}
