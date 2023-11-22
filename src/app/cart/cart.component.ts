import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCartItems();
  }

  goToEcomm() {
    this.router.navigate(['/ecomm']);
  }

  fetchCartItems() {
    this.http.get('https://fakestoreapi.com/carts').subscribe((data: any) => {
      this.cartItems = data;
    });
  }

  deleteAll() {
    fetch('https://fakestoreapi.com/carts/1', {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }
}
