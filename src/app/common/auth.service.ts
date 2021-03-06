import { Router } from '@angular/router';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {User} from '../signup/user';
import {API_URL} from '../app.component';


@Injectable()
export class AuthService {

    isLoggedIn = false;  // use this flag to check logged in or not.

    constructor(private http: Http,private router:Router) {
    }

    private static handleError(error: any) {
        const errorMessage = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : `Server error`;
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }

    validate_user(user: User, login_url:string) {
        //  this.http.post(login_url, User).map(res => res.json()).subscribe((response)=>{
        //     console.log(response);
        //     this.router.navigate(['dashboard'])
        //   });

        var email:string = "admin@gmail.com";
        var password:string = "password";
        // Api call to validate user 
    
        if(user.email == email && user.password == password)
        {
          this.isLoggedIn = true;
          this.router.navigate(['dashboard'])
        }else{
            this.isLoggedIn = false;
            console.log("Invalid Credentials");
        }
    }


    logOut(): Observable<boolean> {
        this.isLoggedIn = !this.isLoggedIn;
        return Observable.of(false);
    }


    register(user: User): Observable<boolean> {
        return this.http.post(API_URL + '/register', user)
            .map(response => response.json() as User)
            .map(currentUser => !User.isNull(currentUser))
            .catch(AuthService.handleError);
    }


}