import { $$ } from "protractor";

export class SalesmanagerMaster {

    id : string;
    name: string;
    designation: string;
    employeeCode: string;
   
    
    
   
    constructor() {
    }

    public static isNull(salesmanagerMaster: SalesmanagerMaster): boolean {
        return salesmanagerMaster.name === null &&
        salesmanagerMaster.designation === null &&
        salesmanagerMaster.employeeCode === null
    
        
            
    }
}