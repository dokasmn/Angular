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
  cartCon = 'https://dummyjson.com/carts/add'; // URL para adicionar ao carrinho

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
          const products: ProductResponse[] = res.body.products.map((product: any) => ({
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price
          }));
          
          return res.clone({
            body: products
          });
        })
      );
  }

  addToCart(productId: number, quantity: number = 1): Observable<HttpResponse<any>> {
    return this._http.post<any>(this.cartCon, {
      userId: 1, // Ajuste conforme necessário
      products: [
        {
          id: productId,
          quantity: quantity,
        }
      ]
    }, { observe: 'response' })
    .pipe(
      map((res: HttpResponse<any>) => {
        return res.clone({
          body: res.body
        });
      })
    );
  }
}
