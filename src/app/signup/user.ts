export class User {

    id: string;
    email: string;
    password: string;
    name: string;
    mobile: number;
    companyName: string;

    constructor() {
    }

    public static isNull(user: User): boolean {
        return user.email === null &&
            user.id === null &&
            user.mobile === null &&
            user.companyName === null &&
            user.name === null
    }
}