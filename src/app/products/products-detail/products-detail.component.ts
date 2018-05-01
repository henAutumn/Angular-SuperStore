import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import {PRODUCTS} from '../product-data';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
