import {Injectable} from '@angular/core';
import {User} from './../signup/user';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import { Logger } from './../common/logger.service';
import {API_URL} from '../app.component';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private logger:Logger,
    ) {}

    public saveUser(User:User) {
        console.log(User);
          return this.http.post(API_URL+'/user', User).subscribe
          ( 
            data => {
                this.logger.log(data.json)
            alert("Confirmation link has been sent to" + User.email + ". Please login to your email account and create your own password ." );
          });
  
    };

}