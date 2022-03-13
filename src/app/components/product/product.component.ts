import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    description: '',
    category: {
      id: '',
      name: ''
    }
  }

  @Output() addToCart = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart() {
    this.addToCart.emit(this.product);
  }

}
