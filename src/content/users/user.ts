export class User {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public address: object;
    public phone: string;
    public website: string;
    constructor(raw: any) {
        this.id = raw.id;
        this.name = raw.name;
        this.username = raw.username;
        this.email = raw.email;
        this.address = raw.address;
        this.phone = raw.phone;
        this.website = raw.website;
    }
}
