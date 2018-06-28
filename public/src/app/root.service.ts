import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RootService {

  constructor(private _http: HttpClient) { }

  retrieveProducts() { 
    return this._http.get('/api/products')
  }

  addProduct(newProduct) {
    return this._http.post('/api/products', newProduct)
  }

  retrieveOneProduct(idNum) {
    console.log("attempting to retrieve one product of idNum", idNum)
    return this._http.get('/api/products/' + idNum)
  }

  editProduct(idNum, product) {
    return this._http.put('/api/products/' + idNum, product)
  }

  deleteProduct(idNum) {
    return this._http.delete('/api/products/' + idNum)
  }
}
