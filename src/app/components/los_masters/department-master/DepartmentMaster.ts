import { $$ } from "protractor";

export class DepartmentMaster {

    id : string;
    departmentName: string;
    serialNumber: number;
    
   
    constructor() {
    }

    public static isNull(departmentMaster: DepartmentMaster): boolean {
        return departmentMaster.departmentName === null &&
        departmentMaster.serialNumber === null
        
            
    }
}