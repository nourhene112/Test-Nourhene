import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [
    new Post('1', 'Titre 1', 'Contenu 1'),
    new Post('2', 'Titre 2', 'Contenu 2'),
    new Post('3', 'Titre 3', 'Contenu 3'),
    new Post('4', 'Titre 4', 'Contenu 4')
  ];

  constructor() { }

  getAllPosts(): Post[] {
    return this.posts;
  }
}