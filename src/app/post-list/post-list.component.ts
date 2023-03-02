import { Component } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts: Post[] = [
    new Post('1', 'Titre 1', 'Contenu 1'),
    new Post('2', 'Titre 2', 'Contenu 2'),
    new Post('3', 'Titre 3', 'Contenu 3'),
    new Post('4', 'Titre 4', 'Contenu 4')
  ];
  post : Post[];
  constructor(private postservice: PostService) {
    this.post = this.postservice.posts;
   }

}