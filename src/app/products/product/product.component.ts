import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productId : number;
  product : IProduct;
  products = [
    {
      productId: 1,
      productName: 'ng-book',
      price: 19.95,
      starRating: 3.2,
      image: '/assets/images/ngbook.jpg'
    },
    {
      productId: 2,
      productName: 'pRo anGular',
      price: 32.99,
      starRating: 4.2,
      image: '/assets/images/proangular.jpg'
    },
    {
      productId: 3,
      productName: 'Angular',
      price: 32.99,
      starRating: 4.5,
      image: '/assets/images/angular.png'
    },
    {
      productId: 4,
      productName: 'NodeJs',
      price: 32.99,
      starRating: 3,
      image: '/assets/images/nodejsinaction.jpg'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private productService: ProductsService
  ) {
    this.productId = +this.route.snapshot.paramMap.get('productId');
    console.log("cons " + this.productId);
  }

  ngOnInit(): void {
    this.product = this.products[this.productId-1];
    console.log(this.product.productId + " " + this.product.productName);
  }

  toProducts(): void {
    //console.log(this.router.toString);
    this.router.navigate(['/products']);
  }
}
