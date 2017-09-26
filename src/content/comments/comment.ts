export class Comment {
    public postId: number;
    public id: number;
    public name: string;
    public email: string;
    public body: string;
    constructor(raw: any) {
        this.postId = raw.postId;
        this.id = raw.id;
        this.name = raw.name;
        this.email = raw.email;
        this.body = raw.body;
    }
}
