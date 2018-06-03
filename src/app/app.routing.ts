import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './components/authentication_components/login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './services/common_services/auth-guard.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoanApplicationNew} from './components/los_application/newloanapplication.component';
import {SignupComponent} from './components/authentication_components/signup/signup.component';
import {ResetPasswordComponent} from './components/authentication_components/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './components/authentication_components/forgot-password/forgot-password.component';
import { LogoutComponent } from './components/authentication_components/logout/logout.component';
import { BaseComponent } from './components/base_component/base.component';
// Master Components
import { StateMasterComponent } from './components/los_masters/state-master/state-master.component';
import { CityMasterComponent } from './components/los_masters/city-master/city-master.component';
import { DistrictMasterComponent } from './components/los_masters/district-master/district-master.component';
import { CountryMasterComponent } from './components/los_masters/country-master/country-master.component';
import { RegionMasterComponent } from './components/los_masters/region-master/region-master.component';
import { BranchMasterComponent } from './components/los_masters/branch-master/branch-master.component';
import { SalesmanagerMasterComponent } from './components/los_masters/salesmanager-master/salesmanager-master.component';
import { SourcingMasterComponent } from './components/los_masters/sourcing-master/sourcing-master.component';
import { SupplierMasterComponent } from './components/los_masters/supplier-master/supplier-master.component';
import { ManufactureMasterComponent } from './components/los_masters/manufacture-master/manufacture-master.component';
import { ModelMasterComponent } from './components/los_masters/model-master/model-master.component';
import { DepartmentMasterComponent } from './components/los_masters/department-master/department-master.component';
import { BounceReasonMasterComponent } from './components/los_masters/bounce-reason-master/bounce-reason-master.component';
import { ProductMasterComponent } from './components/los_masters/product-master/product-master.component';
import { SchemeMasterComponent } from './components/los_masters/scheme-master/scheme-master.component';
import { UserManagementComponent } from './components/user-management/user-management.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'loanapp',
        component: LoanApplicationNew
    },
    {
        path: 'signin',
        component: LoginComponent
    },
    {
        path: 'baseComponent',
        component: BaseComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path:  'resetPassword/:*',
        component: ResetPasswordComponent
    },
    {
        path: 'forgotPassword',
        component: ForgotPasswordComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'stateMaster',
        component: StateMasterComponent
    },
    {
        path: 'cityMaster',
        component: CityMasterComponent
    },
    {
        path: 'districtMaster',
        component: DistrictMasterComponent
    },
    {
        path: 'countryMaster',
        component: CountryMasterComponent
    },
    {
        path: 'regionMaster',
        component: RegionMasterComponent
    },
    {
        path: 'branchMaster',
        component: BranchMasterComponent
    },
    {
        path: 'salesmanagerMaster',
        component: SalesmanagerMasterComponent
    },
    {
        path: 'sourcingMaster',
        component: SourcingMasterComponent
    },
    {
        path: 'supplierMaster',
        component: SupplierMasterComponent
    },
    {
        path: 'manufactureMaster',
        component: ManufactureMasterComponent
    },
    {
        path: 'modelMaster',
        component: ModelMasterComponent
    },
    {
        path: 'departmentMaster',
        component: DepartmentMasterComponent
    },
    {
        path: 'bounceResonMaster',
        component: BounceReasonMasterComponent
    },
    {
        path: 'productMaster',
        component: ProductMasterComponent
    },
    {
        path: 'schemeMaster',
        component: SchemeMasterComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'userManagement',
        component: UserManagementComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{onSameUrlNavigation: 'reload'});
