import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
    @Input() item: Post;

    constructor() { }
    ngOnInit() { }

    love(number) {
        this.item.loveIts += number;
    }
}
