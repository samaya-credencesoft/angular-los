import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppMaterialModules } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
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
    MatStepperModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatButtonModule,
    HttpModule,     

    // Material Modules
    AppMaterialModules
    ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers:[Logger,AddressService,CustomerOnboardingService]

})
export class AppModule { }