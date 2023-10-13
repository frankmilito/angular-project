import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { Post } from './models/post';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: any;
  emailRegex: string = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';
  contactRegex: string = '[789][0-9]{9}';
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
  // userList: Array<any> = [];
  // name: string;
  // email: string;
  // address: string;
  // onAdd() {
  //   this.userList.push({
  //     name: this.name,
  //     email: this.email,
  //     address: this.address,
  //   });
  //   this.name = '';
  //   this.email = '';
  //   this.address = '';
  // }
  // onDelete(i: number) {
  //   this.userList.splice(i, 1);
  // }
  // title =
  //   'Angular Tutorial for complete newbies all ou need is a cmoplete documentioantiono fh thte all thjin ithe al l thinakn foidjn ladkfjalsd falidjla';
  // listing: Array<any> = [];
  // constructor(private lists: PostService) {
  //   this.listing = lists.postlist;
  // }
  // onAdd() {
  //   let newPost: Post = {
  //     id: 7,
  //     title: 'Post 7',
  //   };
  //   this.lists.add(newPost);
  // }
  onSubmit() {
    console.log(this.form.value);
  }
  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required,
        // Validators.pattern(this.emailRegex),
        Validators.email,
      ]),

      contactDetails: new FormGroup({
        address: new FormControl('', [Validators.required]),
        contact: new FormControl('', [
          Validators.required,
          Validators.pattern(this.contactRegex),
        ]),
      }),
    });
  }

  get firstName() {
    return this.form.get('firstName');
  }
  get email() {
    return this.form.get('email');
  }
  get address() {
    return this.form.get('contactDetails.address');
  }
  get contact() {
    return this.form.get('contactDetails.contact');
  }
}
