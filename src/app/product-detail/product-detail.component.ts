import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @Input() product: any;
  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.productService.getProductById(productId).subscribe(product => {
        this.product = product;
      });
    });
  }
}
