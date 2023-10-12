import {
  Component,
  Output,
  Input,
  AfterViewInit,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { PostlistComponent } from '../postlist/postlist.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements AfterViewInit {
  childPost: string;
  title: string = 'This is a dynamic title';
  postMessage: string = 'This is a dynamic message from the post component';
  childMessage: string =
    'This is a dynamic child message from the post component';
  outputChildMessage: string = 'Message from post component via output';
  @ViewChild(PostlistComponent) postlist: any;
  @Input() fromParent!: string;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() {}
  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }
  ngAfterViewInit(): void {}
}
