import { $$ } from "protractor";

export class User {

    id: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    mobileNumber: string;
    companyName: string;
    uuid: string;
    status: string;
    designation : string;

    constructor() {
    }

    public static isNull(user: User): boolean {
        return user.email === null &&
            user.id === null &&
            user.mobileNumber === null &&
            user.companyName === null &&
            user.firstname === null &&
            user.lastname === null &&
            user.uuid == null &&
            user.designation == null 
            
    }
}