import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecomm',
  templateUrl: './ecomm.component.html',
  styleUrls: ['./ecomm.component.css'],
})
export class EcommComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  p: number = 1;
  selectedProduct: any;

  showModal = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.http
      .get<any[]>('https://fakestoreapi.com/products')
      .subscribe((data) => {
        this.products = data;
      });
  }

  loadProductwithCategory(cat: string) {
    this.http
      .get<any[]>('https://fakestoreapi.com/products/category/' + cat)
      .subscribe((data) => {
        this.products = data;
      });
  }

  loadCategories() {
    this.http
      .get<any[]>('https://fakestoreapi.com/products/categories')
      .subscribe((data) => {
        this.categories = data;
      });
  }

  openProductModal(product: any) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeProductDetail() {
    this.selectedProduct = null;
    this.showModal = false;
  }
}
