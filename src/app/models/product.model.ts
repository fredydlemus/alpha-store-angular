export interface Category {
  id: string;
  name: string;
}


export interface Product {
    id: string;
    price: number;
    images: string[];
    title: string;
    description: string;
    category: Category;
    taxes?: number;
}

export interface CreateProductDTO extends Omit<Product, 'id' | 'category'>{
  categoryId: number;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO>  {}
