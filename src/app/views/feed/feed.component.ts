import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HackerNewsService } from '../../services/hacker-news.service';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  private _feed: Observable<number[]>;
  private feedItems: Observable<any>;

  constructor(private hackerNewsService: HackerNewsService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getFeeds();
    this.updateFeedItems();
  }

  private getFeeds() {
    this._feed = this.router.data.switchMap(urlData => this.hackerNewsService.getFeed(urlData.feed));
  }

  private updateFeedItems() {
    this.feedItems = this._feed.map(ids => ids.slice(0, 30));
  }
}
