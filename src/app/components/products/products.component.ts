import { Component, OnInit } from '@angular/core';
import { Product, CreateProductDTO, UpdateProductDTO } from '../../models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;

  products: Product[] = [];
  showProductDetail = false;
  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    description: '',
    category: {
      id: '',
      name: ''
    }
  };

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
    })
  }

  addToCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    this.productsService.getProduct(id).subscribe(data => {
      this.toggleProductDetail();
      this.productChosen = data;
    });
  }

  createNewProduct(){
    const product: CreateProductDTO = {

      price: 10,
      images: [`https://placeimg.com/640/480/any?random=${Math.random()}`],
      title: 'New product',
      description: 'This is a new product',
      categoryId: 2
    }
    this.productsService.create(product).subscribe(data =>{

      this.products.unshift(data);
    });
  }

  updateProduct(){
    const changes : UpdateProductDTO = {
      title: 'Change title',
    }
    const id = this.productChosen.id;
    this.productsService.update(id, changes).subscribe(data =>{
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
      this.products[productIndex] = data;
    });
  }
}
