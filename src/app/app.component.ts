import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // bool: boolean = true;
  // title: string;
  // img: string;
  // details: string;
  // moreDetails: string;
  // background: boolean;
  // postArray: string[] = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];
  // userArray: Array<any> = [
  //   {
  //     name: 'franklin',
  //     id: 1,
  //   },
  //   {
  //     name: 'Desmond',
  //     id: 2,
  //   },
  //   {
  //     name: 'Collins',
  //     id: 3,
  //   },
  // ];

  // addNew() {
  //   this.userArray.push({ id: 4, name: 'Jean' });
  // }

  // onDelete(i: any) {
  //   this.userArray.splice(i, 1);
  // }
  // isActive: boolean = false;
  // stepForm: string;

  // onClick(status: string) {
  //   this.stepForm = status;
  // }
  // toggle() {
  //   console.log(this.isActive);
  //   this.isActive = !this.isActive;
  // }
  userList: Array<any> = [];
  name: string;
  email: string;
  address: string;

  onAdd() {
    this.userList.push({
      name: this.name,
      email: this.email,
      address: this.address,
    });
    this.name = '';
    this.email = '';
    this.address = '';
  }
  onDelete(i: number) {
    this.userList.splice(i, 1);
  }
}
