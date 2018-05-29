import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/common_services/auth.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { ManufactureMaster } from './ManufactureMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-manufacture-master',
  templateUrl: './manufacture-master.component.html',
  styleUrls: ['./manufacture-master.component.css']
})
export class ManufactureMasterComponent implements OnInit {
  model: ManufactureMaster;
  messages: Message[] = [];

  constructor(private authService: AuthService) { 
    this.model = new ManufactureMaster();
  }

  ngOnInit() {
  }

  manufactureMasterDetails(details){
    console.log(this.model);
    this.authService
          .manufactureMasterDetails(this.model)
          .subscribe(isManufactureMasterDetails => {
              if (isManufactureMasterDetails) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }

}
