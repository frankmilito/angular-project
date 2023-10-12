import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
})
export class PostlistComponent implements OnInit {
  postList: string = 'Post list test';
  @Input() postMessage!: string;
  ngOnInit(): void {}
}
