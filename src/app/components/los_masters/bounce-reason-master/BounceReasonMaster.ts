import { $$ } from "protractor";

export class BounceReasonMaster {

    id : string;
    reason: string;
    charges: string;
    
    
    
   
    constructor() {
    }

    public static isNull(bounceReasonMaster: BounceReasonMaster): boolean {
        return bounceReasonMaster.reason === null &&
        bounceReasonMaster.charges === null
    
        
            
    }
}