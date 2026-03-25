import { Component } from '@angular/core';
import { Product } from '../../services/product';
import { ProductModel } from '../../model/product';
import { CommonModule } from '@angular/common';
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

  constructor(private productService: Product) {}

  ngOnInit() {
    this.message$ = this.productService.getTest();
  
    this.products$ = this.productService.getProducts().pipe(
      catchError(() => of([]))
    );

  }

}
