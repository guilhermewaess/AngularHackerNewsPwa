import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HackerNewsService } from '../../services/hacker-news.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  
  private route: Observable<string>;

  feedsShowed = [];
  feedsLength = null;
  pageSizeOptions = [5, 10, 25, 100];

  pageSize = 5;
  startSlice = 0;
  finalSlice = this.pageSize;

  currentPage = 0;
  
  constructor(private hackerNewsService: HackerNewsService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getRoute();
    this.getFeeds();
  }

  // Get feeds
  private getRoute() {
    this.router.data.subscribe(res => this.route = res.feed);
  }

  private getFeeds() {
    this.hackerNewsService.getFeed(this.route)
      .subscribe(res => this.onNewFeeds(res));
  }

  private onNewFeeds(feeds) {
    this.feedsLength = feeds.length;
    this.feedsShowed = feeds.slice(this.startSlice, this.finalSlice);
  }

  // Pagination
  private setSliceIndexUp(){
    this.startSlice = this.finalSlice;
    this.finalSlice = this.finalSlice + this.pageSize;
  }
  private setSliceIndexDown(){
    this.finalSlice = this.startSlice;
    this.startSlice = this.startSlice - this.pageSize;
  }

  onPageChange(event) {
    this.pageSize = event.pageSize;
    if (event.pageIndex < this.currentPage) {
      this.setSliceIndexDown()
    }
    else {
      this.setSliceIndexUp();
    }
    this.currentPage = event.pageIndex;
    this.getFeeds();
  }
}
