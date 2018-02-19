import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './views/feed/feed.component';
import { UserDetailComponent } from './views/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'new', pathMatch: 'full' },
  { path: 'top', data: { feed: 'topstories' }, component: FeedComponent },
  { path: 'new', data: { feed: 'newstories' }, component: FeedComponent },
  { path: 'ask', data: { feed: 'askstories' }, component: FeedComponent },
  { path: 'show', data: { feed: 'showstories' }, component: FeedComponent },
  { path: 'jobs', data: { feed: 'jobstories' }, component: FeedComponent },
  // { path: 'item/:id', component: StoryDetailComponent },
  { path: 'user/:userId', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
