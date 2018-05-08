export class User {

    id: string;
    email: string;
    password: string;
    name: string;
    mobileNumber: number;
    companyName: string;
    designation:string;

    constructor() {
    }

    public static isNull(user: User): boolean {
        return user.email === null &&
            user.id === null &&
            user.mobileNumber === null &&
            user.companyName === null &&
            user.name === null &&
            user.designation ===null

    }
}