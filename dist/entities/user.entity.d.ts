export declare class User {
    id: number;
    username: string;
    password: string;
    email: string;
    phone: number;
    validatePassword(password: string): boolean;
    getInfoToToken(): {
        id: number;
        username: string;
        email: string;
    };
}
