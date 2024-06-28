import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comment } from '../comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() postId!: number;
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getCommentsByPost(this.postId).subscribe((data) => {
      this.comments = data;
    });
  }
}
