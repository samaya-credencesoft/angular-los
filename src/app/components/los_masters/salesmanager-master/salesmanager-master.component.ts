import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/common_services/auth.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { SalesmanagerMaster } from './SalesmanagerMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-salesmanager-master',
  templateUrl: './salesmanager-master.component.html',
  styleUrls: ['./salesmanager-master.component.css']
})
export class SalesmanagerMasterComponent implements OnInit {
  model: SalesmanagerMaster;
  messages: Message[] = [];

  constructor(private authService: AuthService) { 
    this.model = new SalesmanagerMaster();
  }

  ngOnInit() {
  }

  salesmanagerMasterDetails(details){
    console.log(this.model);
    this.authService
          .salesmanagerMasterDetails(this.model)
          .subscribe(isSalesmanagerMasterDetails => {
              if (isSalesmanagerMasterDetails) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }

}
