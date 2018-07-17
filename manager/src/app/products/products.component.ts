import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Object[];
  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    this.getProducts();
  };

  getProducts(){
    this.products = []

    let allProducts = this._httpService.allProducts();
    allProducts.subscribe(data =>{
      for (var i in data){
        this.products.push(data[i])
      }
      console.log(this.products);
      return this.products;
    });
  };

  destroy(id){
    let destroy = this._httpService.removeProduct(id);
    destroy.subscribe(data => {
      console.log(data);
      this.getProducts();
    });
  }

}
