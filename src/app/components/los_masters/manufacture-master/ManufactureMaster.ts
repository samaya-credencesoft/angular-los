import { $$ } from "protractor";

export class ManufactureMaster {

    id : string;
    manufacturerName: string;
    location: string;
    panNumber: string;
    gstNumber: string;
    loanType: string;
    address: string;
    accountDetails: string;
    
    
   
    constructor() {
    }

    public static isNull(manufactureMaster: ManufactureMaster): boolean {
        return manufactureMaster.manufacturerName === null &&
        manufactureMaster.location === null &&
        manufactureMaster.panNumber === null &&
        manufactureMaster.gstNumber === null &&
        manufactureMaster.loanType === null &&
        manufactureMaster.address === null &&
        manufactureMaster.accountDetails === null
        
            
    }
}