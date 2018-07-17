import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  update: FormGroup;
  product: Object;
  id: any;
  constructor(private _httpService: HttpService, private fb: FormBuilder, private _route: ActivatedRoute, private _router: Router, private _parent: ProductsComponent) {
    this._route.paramMap.subscribe(data => {
      this.id = data.get('id');
      this.getProduct(data.get('id'));
    })
    this.update = fb.group({
      title: '',
      price: '',
      url: '',
      _id: ''
    })
  }

  ngOnInit() {
    this.product = {
      title: '',
      price: '',
      url: '',
      _id: ''
    }
  }

  getProduct(id){
    let product = this._httpService.oneProduct(id);
    product.subscribe(data => {
      this.product = data;
      console.log(this.product); 
      return this.product;
    });
  }

  updateProduct(data){
    console.log(data);
    let updateProduct = this._httpService.updateProduct(data);
    updateProduct.subscribe(data => {
      console.log(data);
      this._parent.ngOnInit();
    });
  }

}
