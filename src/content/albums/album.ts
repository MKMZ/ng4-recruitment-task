export class Album {
    public userId: number;
    public id: number;
    public title: string;
    constructor(raw: any) {
        this.userId = raw.userId;
        this.id = raw.id;
        this.title = raw.title;
    }
}
