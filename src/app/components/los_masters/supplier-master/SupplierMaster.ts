import { $$ } from "protractor";

export class SupplierMaster {

    id : string;
    supplierName: string;
    manufacturerName: string;
    location: string;
    panNumber: string;
    gstNumber: string;
    loanType: string;
    address: string;
    accountDetails: string;
    
    
   
    constructor() {
    }

    public static isNull(supplierMaster: SupplierMaster): boolean {
        return supplierMaster.supplierName === null &&
        supplierMaster.manufacturerName === null &&
        supplierMaster.location === null &&
        supplierMaster.panNumber === null &&
        supplierMaster.gstNumber === null &&
        supplierMaster.loanType === null &&
        supplierMaster.address === null &&
        supplierMaster.accountDetails === null
        
            
    }
}