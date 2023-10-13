import {
  Component,
  Output,
  Input,
  AfterViewInit,
  ViewChild,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { PostlistComponent } from '../postlist/postlist.component';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  // providers: [PostService],
})
export class PostComponent implements OnInit {
  // childPost: string;
  // title: string = 'This is a dynamic title';
  // postMessage: string = 'This is a dynamic message from the post component';
  // childMessage: string =
  //   'This is a dynamic child message from the post component';
  // outputChildMessage: string = 'Message from post component via output';
  // @ViewChild(PostlistComponent) postlist: any;
  // @Input() fromParent!: string;
  // @Output() messageEvent = new EventEmitter<string>();
  posts: Array<any>;
  constructor(private postService: PostService) {
    // let postService = new PostService();
    this.posts = postService.postlist;
  }
  // sendMessage() {
  //   this.messageEvent.emit(this.outputChildMessage);
  // }
  ngOnInit() {}
}
