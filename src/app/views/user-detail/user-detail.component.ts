import { Component, OnInit, Input } from '@angular/core';
import { HackerNewsService } from '../../services/hacker-news.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public user: Observable<any>;

  constructor(private hackerNewsService: HackerNewsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    const userId = this.route.snapshot.paramMap.get('userId');
    this.user = this.hackerNewsService.getUser(userId);
  };
}
