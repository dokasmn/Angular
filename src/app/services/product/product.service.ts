import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductResponse } from '../../interfaces/product-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _http = inject(HttpClient)

  registerCon = 'https://dummyjson.com/products/add';
  listCon = 'https://dummyjson.com/products';
  cartCon = 'https://dummyjson.com/carts/add';
  cartListCon = 'https://dummyjson.com/carts/user/5';


  registerProduct(id: number, title: string, description: string, price: string): Observable<HttpResponse<ProductResponse>> {
    return this._http.post<any>(this.registerCon, {
      id: id,
      title: title,
      description: description,
      price: price
    }, { observe: 'response' })
    .pipe(
      map((res: HttpResponse<any>) => {
        return res.clone({
          body: {
            id: res.body.id,
            title: res.body.title,
            description: res.body.description,
            price: res.body.price,
          }
        });
      })
    );
  }


  getProducts(): Observable<HttpResponse<ProductResponse[]>> {
    return this._http.get<any>(this.listCon, { observe: 'response' })
      .pipe(
        map((res: HttpResponse<any>) => {
          const products: ProductResponse[] = res.body.products.map((product: any, index:number) => ({
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            thumbnail: product.thumbnail,
            isFeatured: index % 7 === 0 ? true : false,
          }));
          
          return res.clone({
            body: products
          });
        })
      );
  }


  addToCart(product: ProductResponse): void {
    const storedCart = localStorage.getItem('cart');
    let newCartProducts: ProductResponse[] = storedCart ? JSON.parse(storedCart) : []; 
    newCartProducts.push(product);
    localStorage.setItem('cart', JSON.stringify(newCartProducts));
  }


  getCartProducts(): ProductResponse[] {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }


  removeFromCart(productId: number): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      let cartProducts: ProductResponse[] = JSON.parse(storedCart);
      cartProducts = cartProducts.filter(product => product.id !== productId);
      localStorage.setItem('cart', JSON.stringify(cartProducts));
    }
  }
}
