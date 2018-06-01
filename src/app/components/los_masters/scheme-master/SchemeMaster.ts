import { $$ } from "protractor";

export class SchemeMaster {

    id : string;
    schemeName: string;
    schemeCode: string;
    minimumLoanAmount: number;
    maximumLoanAmount: number;
    minimumTenure: number;
    maximumTenure: number;
    minimumEffectiveInterestRate: number;
    maximumEffectiveInterestRate: number;
    minimumFlatRate: number;
    maximumFlatRate: number;
    rateMethod: string;
    rateType: string;
    reschedulement: string;

   
    
    
   
    constructor() {
    }

    public static isNull(schemeMaster: SchemeMaster): boolean {
        return schemeMaster.schemeName === null &&
        schemeMaster.schemeCode === null &&
        schemeMaster.minimumLoanAmount === null &&
        schemeMaster.maximumLoanAmount === null &&
        schemeMaster.minimumTenure === null &&
        schemeMaster.maximumTenure === null &&
        schemeMaster.minimumEffectiveInterestRate === null &&
        schemeMaster.maximumEffectiveInterestRate === null &&
        schemeMaster.minimumFlatRate === null &&
        schemeMaster.maximumFlatRate === null &&
        schemeMaster.rateMethod === null &&
        schemeMaster.rateType === null &&
        schemeMaster.reschedulement === null

    
        
            
    }
}