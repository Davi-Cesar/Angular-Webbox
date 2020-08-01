import { Product } from './product.model';

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackbar: MatSnackBar,
    private http: HttpClient    
  ) { }

  showMessage(msg : string){
    this.snackbar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition:"top"
    })
  }
  //Método para criação de um product
  create( product: Product): Observable <Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }
  //Método para retornar uma lista de product
  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }
  //Método para ler produto por id
  readById(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }
  //Método para atualizar produto
  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
  //Método para deletar produto
  delete(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.delete<Product>(url)
  }
}
