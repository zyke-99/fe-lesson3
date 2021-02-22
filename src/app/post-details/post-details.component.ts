import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {postList} from "../shared/post-list";
import {Post} from "../shared/post";
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  id:string;
  post: Post;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.post = this.postService.getPost(this.id);
  }

}
