import { $$ } from "protractor";

export class ModelMaster {

    id : string;
    modelName: string;
    subModel: string;
   
    
    
   
    constructor() {
    }

    public static isNull(modelMaster: ModelMaster): boolean {
        return modelMaster.modelName === null &&
        modelMaster.subModel === null
        
            
    }
}