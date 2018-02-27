import { Component, OnInit, Input, Inject } from '@angular/core';
import { HackerNewsService } from '../../services/hacker-news.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public user: Observable<any>;

  constructor(private hackerNewsService: HackerNewsService,
    private dialogRef: MatDialogRef<UserDetailComponent>,
    @Inject(MAT_DIALOG_DATA) private dialogData: any) { }

  ngOnInit() {
    this.getUser();
  }
  
  private getUser() {
    this.hackerNewsService.getUser(this.dialogData.userId).subscribe(user => this.user = user);
  };
}
