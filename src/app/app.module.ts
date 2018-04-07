import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppMaterialModules } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import {Http,Response,RequestOptions,Headers,HttpModule} from '@angular/http';
import { Logger } from './logger.service';
import { AddressService } from './address.service';
import { CustomerOnboardingService } from './los.service';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,  
    AppMaterialModules,
    HttpModule
   
    ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers:[Logger,AddressService,CustomerOnboardingService]

})
export class AppModule { }