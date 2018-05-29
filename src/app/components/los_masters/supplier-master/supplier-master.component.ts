import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/common_services/auth.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { SupplierMaster } from './SupplierMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-supplier-master',
  templateUrl: './supplier-master.component.html',
  styleUrls: ['./supplier-master.component.css']
})
export class SupplierMasterComponent implements OnInit {
  model: SupplierMaster;
  messages: Message[] = [];

  constructor(private authService: AuthService) { 
    this.model = new SupplierMaster();
  }

  ngOnInit() {
  }

  supplierMasterDetails(details){
    console.log(this.model);
    this.authService
          .supplierMasterDetails(this.model)
          .subscribe(isSupplierMasterDetails => {
              if (isSupplierMasterDetails) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }

}
