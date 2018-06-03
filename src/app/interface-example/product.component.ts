import { Component, OnInit } from '@angular/core';
import { Product, ProductList } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit, ProductList {

  products: Product[];

  constructor() { }

  ngOnInit() {
    this.products = [];
    this.loadProducts();
  }

  calculateTotal(): number {
    let total: number = 0;
    this.products.forEach(item => {
      total += item.price;
    });
    return total;
  }

  calculateDiscount(percent: number): number {
    return this.calculateTotal() * (percent / 100);
  }

  private loadProducts() {
    let product: Product = {
      productId: 1234,
      productName: 'abcd',
      price: 150,
      description: 'This is a sample product',
      discount: 10
    };

    // Try to re-assign on read-only property;
    // product.productId = 2585;

    product.price = 250;

    this.products.push(product);
  }

}
