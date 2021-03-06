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
    designations = [
        {value: 'Team Lead', viewValue: 'Team Lead'},
        {value: 'Floor Manger', viewValue: 'Floor Manger'},
        {value: 'Project Manager', viewValue: 'Project Manger'}
      ];
  model: User;
  messages: Message[] = [];

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
      this.model = new User();
  }

  onRegister(details): void {
      console.log(details);

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