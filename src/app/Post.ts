/**
 * Object representing a post in the blog
 * @class
 */
export class Post {
    title: string;
    content: string;
    loveIts: number;
    createdAt: Date;

    /**
     * Initializes the post
     *
     * @param title   Title of the post
     * @param content Content of the post
     */
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        this.loveIts = 0;
        this.createdAt = new Date();
    }
}
