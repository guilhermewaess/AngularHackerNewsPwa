import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './views/feed/feed.component';

const routes: Routes = [
  { path: '', redirectTo: 'new', pathMatch: 'full' },
  { path: 'top', data: { feed: 'topstories', state: 'top' }, component: FeedComponent },
  { path: 'new', data: { feed: 'newstories', state: 'new' }, component: FeedComponent },
  { path: 'ask', data: { feed: 'askstories', state: 'ask' }, component: FeedComponent },
  { path: 'show', data: { feed: 'showstories', state: 'show' }, component: FeedComponent },
  { path: 'jobs', data: { feed: 'jobstories', state: 'jobs' }, component: FeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
