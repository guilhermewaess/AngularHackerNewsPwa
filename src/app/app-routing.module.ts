import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './views/feed/feed.component';
import { UserDetailComponent } from './views/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'new', pathMatch: 'full' },
  { path: 'top', data: { feed: 'topstories', state: 'top' }, component: FeedComponent },
  { path: 'new', data: { feed: 'newstories', state: 'new' }, component: FeedComponent },
  { path: 'ask', data: { feed: 'askstories', state: 'ask' }, component: FeedComponent },
  { path: 'show', data: { feed: 'showstories', state: 'show' }, component: FeedComponent },
  { path: 'jobs', data: { feed: 'jobstories', state: 'jobs' }, component: FeedComponent },
  // { path: 'item/:id', component: StoryDetailComponent },
  { path: 'user/:userId', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
