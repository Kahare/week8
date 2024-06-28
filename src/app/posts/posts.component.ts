import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  userId = 1;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPostsByUser(this.userId).subscribe((data) => {
      this.posts = data;
    });
  }
}
