import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'
import { PostsService } from 'src/app/shared/posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from 'src/app/shared/post.model';
@Component({
  selector: 'app-novi-clanak',
  templateUrl: './novi-clanak.component.html',
  styleUrls: ['./novi-clanak.component.css']
})
export class NoviClanakComponent implements OnInit {
  uspesno = "";
  neuspesno = "";
  upisanNaslov: string;
  upisanTekst: string;
  post: Post;
  form: FormGroup;
  private mode = 'create'
  private postId: string;
  constructor(public postsService: PostsService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, { validators: [Validators.required] }),
      // image: new FormControl(null, {validators: [Validators.required]})
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.mode = "edit";
        this.postId = paramMap.get("postId");
        
        this.postsService.getPost(this.postId).subscribe(postData => {
          
          this.post = {
            id: postData._id,
            title: postData.title,
            content: postData.content
          };
          this.form.setValue({
            title: this.post.title,
            content: this.post.content
          });
        });
      } else {
        this.mode = "create";
        this.postId = null;
      }
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
  }

  onSavePost() {
    if (this.form.invalid) {
      this.neuspesno = "Popunite Sva Polja";
      this.uspesno = "";

      return;
    }
    if (this.mode === 'create') {
      this.postsService.addPost(this.form.value.naslov, this.form.value.clanak);
      this.form.reset();

    }
    else {
      this.postsService.updatePost(this.postId, this.form.value.naslov, this.form.value.clanak)
    }
    this.uspesno = "Uspešno Kreiran Članak";
    this.neuspesno = "";
  }

}


