export class User {
    id: number;
    emailId: string;
    password: string;

    constructor(emailId: string, password: string) {
        this.emailId = emailId;
        this.password = password;
    }
}