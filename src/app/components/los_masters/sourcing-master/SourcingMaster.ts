import { $$ } from "protractor";

export class SourcingMaster {

    id : string;
    dsaName: string;
    location: string;
    state: string;
    panNumber: string;
    gstNumber: string;
    loanType: string;
    address: string;
    accountDetails: string;
    
    
   
    constructor() {
    }

    public static isNull(sourcingMaster: SourcingMaster): boolean {
        return sourcingMaster.dsaName === null &&
        sourcingMaster.location === null &&
        sourcingMaster.state === null &&
        sourcingMaster.panNumber === null &&
        sourcingMaster.gstNumber === null &&
        sourcingMaster.loanType === null &&
        sourcingMaster.address === null &&
        sourcingMaster.accountDetails === null
        
            
    }
}