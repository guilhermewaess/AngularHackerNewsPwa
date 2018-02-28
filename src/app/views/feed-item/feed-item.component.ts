import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HackerNewsService } from '../../services/hacker-news.service';
import { MatDialog } from '@angular/material';
import { UserDetailComponent } from '../user-detail/user-detail.component';


@Component({
  selector: 'feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {

  @Input() itemId;
  public item: Observable<any>;

  constructor(private hackerNewsService: HackerNewsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getItem();
  }

  openUserDetailDialog(userId) {
    let dialogRef = this.dialog.open(UserDetailComponent, {
      data: { userId }
    })
  }

  private getItem() {
    this.item = this.hackerNewsService.getItem(this.itemId);
  }
}
