import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbar } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { PostService } from './services/post.service';
@NgModule({
  declarations: [
    AppComponent,
    AppNavbar,
    PostComponent,
    PostlistComponent,
    SummaryPipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
