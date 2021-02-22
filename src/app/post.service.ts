import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './shared/post';
import { postList } from './shared/post-list';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  loadPosts(): any {
    return this.httpClient.get('http://localhost:3000/posts');
  }

  getPost(id): any{
    return this.httpClient.get('http://localhost:3000/posts')
      .pipe(filter((post:Post)=> post.id == id));
  }
}
