import { Logger } from './logger.service';
import {
    Http,
    Response,
    RequestOptions,
    Headers,
    HttpModule
  
  } from '@angular/http';
  
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanApplication } from '../../components/los_application/loan.Application';



@Injectable ()
export class AddressService {
    constructor(
        private logger:Logger,
        private http:Http
    ){}
    googleAddressApi="https://maps.googleapis.com/maps/api/geocode/json?address=";
    googleAddressApiKey="AIzaSyAxfDj8Mz_mIccPTLR1jZeNcftfTcc7zaA";
    loanApplication: LoanApplication;
 public getAddressDetailsByPostCode(loanApplication:LoanApplication):LoanApplication{
    console.log("Trying to call google api with pincode"+loanApplication.pinCode);
    let url= `${this.googleAddressApi}`+`${loanApplication.pinCode}`+'&key='+`${this.googleAddressApiKey}`;
    console.log('URL for google api:'+url);
    this.http.get(url).subscribe(
      res =>{
    //  this.logger.log("Hello"+res.json().results[0].address_components[0].long_name);
     // this.logger.log("Country Json"+res.json().results[0].address_components[3].long_name); 
      loanApplication.pinCode=res.json().results[0].address_components[0].long_name;
      loanApplication.addressCity=res.json().results[0].address_components[1].long_name;
      loanApplication.addressState=res.json().results[0].address_components[2].long_name;  
      loanApplication.addressCountry=res.json().results[0].address_components[3].long_name; 
      //this.logger.log("Country loanApplication"+loanApplication.addressCountry); 
    },
  
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Server-side error occured.");
      }console.log("Error occured.")
    }
    ) ;
    return loanApplication;
    }
}