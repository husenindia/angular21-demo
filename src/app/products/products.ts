import { Component } from '@angular/core';
import { Product } from '../../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.sass',
})
export class Products {
  message: string = '';

  constructor(private productService: Product) {}

  ngOnInit() {
    this.productService.getTest().subscribe(res => {
      this.message = res;
    });
  }
}
