import { $$ } from "protractor";

export class Branchuser {

    branchName: string;
    branchManagerName: string;
    password: string;
    designation: string;
    branchCode: string;
    activeStatus: string;
  
    constructor() {
    }

    public static isNull(branchuser: Branchuser): boolean {
        return branchuser.branchName === null &&
        branchuser.branchManagerName === null &&
        branchuser.password === null &&
        branchuser.designation === null &&
        branchuser.branchCode === null &&
        branchuser.activeStatus == null 
            
    }
}