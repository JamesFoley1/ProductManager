import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}
  

  allProducts(){
    return this._http.get('/api/products');
  };

  oneProduct(id){
    return this._http.get('/api/products/'+id);
  };

  newProduct(data){
    return this._http.post('/api/products/new', data);
  };

  updateProduct(data){
    return this._http.post('/api/products/edit/', data);
  }

  removeProduct(id){
    return this._http.get('/api/products/destroy/'+id)
  }

}
