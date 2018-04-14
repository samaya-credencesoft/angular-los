import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

import {AuthService} from '../common/auth.service';
import {User} from '../signup/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: User;
  messages: Message[] = [];

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
      this.model = new User();
  }

  onSubmit(): void {
      this.messages = [];
      this.authService
          .register(this.model)
          .subscribe(isRegistered => {
              if (isRegistered) {
                  this.messages.push({severity: 'info', summary: 'Registered successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Email already in use'});
              }
          });
  }
}