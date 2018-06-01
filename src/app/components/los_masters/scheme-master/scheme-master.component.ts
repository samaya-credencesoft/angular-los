import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/common_services/auth.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { SchemeMaster } from './SchemeMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-scheme-master',
  templateUrl: './scheme-master.component.html',
  styleUrls: ['./scheme-master.component.css']
})
export class SchemeMasterComponent implements OnInit {
  model: SchemeMaster;
  messages: Message[] = [];

  constructor(private authService: AuthService) { 
    this.model = new SchemeMaster();
  }

  ngOnInit() {
  }

  schemeMasterDetails(details){
    console.log(this.model);
    this.authService
          .schemeMasterDetails(this.model)
          .subscribe(isSchemeMasterDetails => {
              if (isSchemeMasterDetails) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }

}
