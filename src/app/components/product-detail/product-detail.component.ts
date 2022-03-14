import { Component, OnInit, Input, Output, EventEmitter   } from '@angular/core';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() productChosen: Product ={
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
  @Input() showProductDetail: boolean = false;
  @Output() closeProductDetail = new EventEmitter();
  @Output() editProduct = new EventEmitter();
  @Output() deleteProductEvent = new EventEmitter();




  toggleProductDetail() {
    this.closeProductDetail.emit();
  }

  updateProduct() {
    this.editProduct.emit();
  }

  deleteProduct() {
    this.deleteProductEvent.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
