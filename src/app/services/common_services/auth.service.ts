import { Router } from '@angular/router';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {User} from '../../components/authentication_components/signup/user';
import { BranchMaster } from '../../components/los_masters/branch-master/BranchMaster';
import { DepartmentMaster } from '../../components/los_masters/department-master/DepartmentMaster';
import { ManufactureMaster } from '../../components/los_masters/manufacture-master/ManufactureMaster';
import { SupplierMaster } from '../../components/los_masters/supplier-master/SupplierMaster';
import { SourcingMaster } from '../../components/los_masters/sourcing-master/SourcingMaster';
import { ModelMaster } from '../../components/los_masters/model-master/ModelMaster';
import { ProductMaster } from '../../components/los_masters/product-master/ProductMaster';
import { SalesmanagerMaster } from '../../components/los_masters/salesmanager-master/SalesmanagerMaster';
import { BounceReasonMaster } from '../../components/los_masters/bounce-reason-master/BounceReasonMaster';
import { SchemeMaster } from '../../components/los_masters/scheme-master/SchemeMaster';

import {API_URL} from '../../app.component';


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
     this.http.post(login_url, user).map(res => res.json()).subscribe((response)=>{
                console.log(response);
                if(response.login_status === "success"){
                    this.isLoggedIn = true;
                    localStorage.setItem('isLoggedIn', "true");
                    console.log("login success");
                    this.router.navigate(['dashboard']);
                }else if(response.login_status === "failed"){
                    console.log("login failed");
                    this.router.navigate(['signin']);
                }else{
                    console.log("user doesn't exist ! please sign up !");
                    this.router.navigate(['signup']);
                }
                  });
    
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

    public updateUser(user:User) {
        return this.http.put(API_URL+ '/updateUser', user);
    };

    branchMasterDetails(branc:BranchMaster){

        return this.http.post(API_URL + '/branchMasterDetails', branc)
        .map(response => response.json() as BranchMaster)
        .map(branc => !BranchMaster.isNull(branc))
        .catch(AuthService.handleError);
    }


    departmentMasterDetails(department:DepartmentMaster){

        return this.http.post(API_URL + '/departmentMasterDetails', department)
        .map(response => response.json() as DepartmentMaster)
        .map(department => !DepartmentMaster.isNull(department))
        .catch(AuthService.handleError);
    }

    manufactureMasterDetails(manufacture:ManufactureMaster){

        return this.http.post(API_URL + '/manufactureMasterDetails', manufacture)
        .map(response => response.json() as ManufactureMaster)
        .map(manufacture => !ManufactureMaster.isNull(manufacture))
        .catch(AuthService.handleError);
    }

    supplierMasterDetails(supplier:SupplierMaster){

        return this.http.post(API_URL + '/supplierMasterDetails', supplier)
        .map(response => response.json() as SupplierMaster)
        .map(supplier => !SupplierMaster.isNull(supplier))
        .catch(AuthService.handleError);
    }

    sourcingMasterDetails(sourcing:SourcingMaster){

        return this.http.post(API_URL + '/sourcingMasterDetails', sourcing)
        .map(response => response.json() as SourcingMaster)
        .map(sourcing => !SourcingMaster.isNull(sourcing))
        .catch(AuthService.handleError);
    }

    modelMasterDetails(model:ModelMaster){

        return this.http.post(API_URL + '/modelMasterDetails', model)
        .map(response => response.json() as ModelMaster)
        .map(model => !ModelMaster.isNull(model))
        .catch(AuthService.handleError);
    }

    productMasterDetails(product:ProductMaster){

        return this.http.post(API_URL + '/productMasterDetails', product)
        .map(response => response.json() as ProductMaster)
        .map(product => !ProductMaster.isNull(product))
        .catch(AuthService.handleError);
    }

    salesmanagerMasterDetails(salesmanager:SalesmanagerMaster){

        return this.http.post(API_URL + '/salesmanagerMasterDetails', salesmanager)
        .map(response => response.json() as SalesmanagerMaster)
        .map(salesmanager => !SalesmanagerMaster.isNull(salesmanager))
        .catch(AuthService.handleError);
    }

    bounceReasonMasterDetails(bounceReason:BounceReasonMaster){

        return this.http.post(API_URL + '/bounceReasonMasterDetails', bounceReason)
        .map(response => response.json() as BounceReasonMaster)
        .map(bounceReason => !BounceReasonMaster.isNull(bounceReason))
        .catch(AuthService.handleError);
    }

    schemeMasterDetails(scheme:SchemeMaster){

        return this.http.post(API_URL + '/schemeMasterDetails', scheme)
        .map(response => response.json() as SchemeMaster)
        .map(scheme => !SchemeMaster.isNull(scheme))
        .catch(AuthService.handleError);
    }


}