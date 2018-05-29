import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/common_services/auth.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { ProductMaster } from './ProductMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})
export class ProductMasterComponent implements OnInit {
  model: ProductMaster;
  messages: Message[] = [];

  constructor(private authService: AuthService) { 
    this.model = new ProductMaster();
  }

  ngOnInit() {
  }

  productMasterDetails(details){
    console.log(this.model);
    this.authService
          .productMasterDetails(this.model)
          .subscribe(isProductMasterDetails => {
              if (isProductMasterDetails) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }

}
