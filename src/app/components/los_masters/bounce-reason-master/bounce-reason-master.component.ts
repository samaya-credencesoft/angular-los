import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/common_services/auth.service';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-bounce-reason-master',
  templateUrl: './bounce-reason-master.component.html',
  styleUrls: ['./bounce-reason-master.component.css']
})
export class BounceReasonMasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
