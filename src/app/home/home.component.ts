import {Component, OnInit} from '@angular/core';
import { PostService } from '../post.service';
import {Post} from "../shared/post";
import {postList} from "../shared/post-list";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.posts = this.postService.loadPosts().subscribe(posts=>{});
  }

}
