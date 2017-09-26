export class Photo {
    public albumId: number;
    public id: number;
    public title: string;
    public url: string;
    public thumbnailUrl: string;
    constructor(raw: any) {
        this.albumId = raw.albumId;
        this.id = raw.id;
        this.title = raw.title;
        this.url = raw.url;
        this.thumbnailUrl = raw.thumbnailUrl;
    }
}
