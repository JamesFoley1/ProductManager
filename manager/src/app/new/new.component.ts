import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  create: FormGroup;

  constructor(private _httpService: HttpService, private fb: FormBuilder, private _route: ActivatedRoute, private _router: Router) {
    this.create = fb.group({
      title: '',
      price: '',
      url: ''
    })
  }
  ngOnInit() {
  }

  newProduct(post){
    let new_product = this._httpService.newProduct(post)
    new_product.subscribe(data => {
      console.log(data)
      this._router.navigate(['/products']);
    });
  }

}
