export class Post {
    public userId: number;
    public id: number;
    public title: string;
    public body: string;
    constructor(raw: any) {
        this.userId = raw.userId;
        this.id = raw.id;
        this.title = raw.title;
        this.body = raw.body;
    }
}
