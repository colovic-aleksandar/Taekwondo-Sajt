import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../shared/post.model'
import { PostsService } from 'src/app/shared/posts.service';
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnDestroy {
  Disable = false;


  posts: Post[] = [];
  private postsSub: Subscription;



  constructor(public postsService: PostsService) {

    setTimeout(() => {
      this.Disable = true;
    }, 2000);
  }

  ngOnInit() {

    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts

      });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
