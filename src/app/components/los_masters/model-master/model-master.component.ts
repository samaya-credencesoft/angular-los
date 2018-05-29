import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/common_services/auth.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { ModelMaster } from './ModelMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-model-master',
  templateUrl: './model-master.component.html',
  styleUrls: ['./model-master.component.css']
})
export class ModelMasterComponent implements OnInit {
  model: ModelMaster;
  messages: Message[] = [];

  constructor(private authService: AuthService) { 
    this.model = new ModelMaster();
  }

  ngOnInit() {
  }

  modelMasterDetails(details){
    console.log(this.model);
    this.authService
          .modelMasterDetails(this.model)
          .subscribe(isModelMasterDetails => {
              if (isModelMasterDetails) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }

}
