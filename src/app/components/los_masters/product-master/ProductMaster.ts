import { $$ } from "protractor";

export class ProductMaster {

    id : string;
    productName: string;
    productCode: string;
    revolving: string;
    interestPerYear: string;
    interestPerMonth: string;
    active: string;
   
   
    
    
   
    constructor() {
    }

    public static isNull(productMaster: ProductMaster): boolean {
        return productMaster.productName === null &&
        productMaster.productCode === null &&
        productMaster.revolving === null &&
        productMaster.interestPerYear === null &&
        productMaster.interestPerMonth === null &&
        productMaster.active === null
        
            
    }
}