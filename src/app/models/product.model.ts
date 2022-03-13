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
}
