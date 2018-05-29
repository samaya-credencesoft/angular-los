import { $$ } from "protractor";

export class BranchMaster {

    id : string;
    branchName: string;
    branchManagerName: string;
    designation: string;
    branchCode: string;
    activeStatus: string;
   
    constructor() {
    }

    public static isNull(branchMaster: BranchMaster): boolean {
        return branchMaster.branchName === null &&
        branchMaster.branchManagerName === null &&
        branchMaster.designation === null &&
        branchMaster.branchCode === null &&
        branchMaster.activeStatus == null 
            
    }
}