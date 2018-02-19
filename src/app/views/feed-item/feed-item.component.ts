import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HackerNewsService } from '../../services/hacker-news.service';

@Component({
  selector: 'feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {

  @Input() private itemId;
  public item: Observable<any>;

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit() {
    this.getItem();
  }

  private getItem() {
    this.item = this.hackerNewsService.getItem(this.itemId);
  }
}
