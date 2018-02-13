import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';
import { HackerNewsService } from '../services/hacker-news.service';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    AngularFireModule.initializeApp({ databaseURL: 'https://hacker-news.firebaseio.com' }),
    AngularFireDatabaseModule,
  ],
  declarations: [FeedComponent, FeedItemComponent],
  providers: [HackerNewsService]
})
export class ViewsModule { }
