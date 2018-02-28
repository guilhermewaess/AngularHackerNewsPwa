import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { FeedItemComponent } from './feed-item.component';
import { HackerNewsService } from '../../services/hacker-news.service';
import { MatDialog } from '@angular/material';
import { RouterModule, Router, ActivatedRoute, Routes } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { LocationStrategy } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { FeedComponent } from '../feed/feed.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';

fdescribe('FeedItemComponent', () => {
  
  let component: FeedItemComponent;
  let fixture: ComponentFixture<FeedItemComponent>;
  let hackerNewsServiceStub;
  let dialogStub;
  let itemMock;

  const helper = {
    createServiceStub() {
      return {
        getItem: jasmine.createSpy().and.returnValue(Observable.of(itemMock)),
      }
    },
    createDialogStub() {
      return {
        open: jasmine.createSpy().and.returnValue({})
      }
    },
  }

  const routes: Routes = [
    { path: '', redirectTo: 'new', pathMatch: 'full' },
    { path: 'top', data: { feed: 'topstories', state: 'top' }, component: FeedItemComponent },
    { path: 'new', data: { feed: 'newstories', state: 'new' }, component: FeedItemComponent },
    { path: 'ask', data: { feed: 'askstories', state: 'ask' }, component: FeedItemComponent },
    { path: 'show', data: { feed: 'showstories', state: 'show' }, component: FeedItemComponent },
    { path: 'jobs', data: { feed: 'jobstories', state: 'jobs' }, component: FeedItemComponent },
  ];

  beforeEach(async(() => {
    itemMock = {
      itemId: 1
    };
    hackerNewsServiceStub = helper.createServiceStub();
    dialogStub = helper.createDialogStub();
    TestBed.configureTestingModule({
      declarations: [
        FeedItemComponent
      ],
      providers: [
        {provide: HackerNewsService, useValue: hackerNewsServiceStub},
        {provide: MatDialog, useValue: dialogStub}
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedItemComponent);
    component = fixture.componentInstance;
    component.itemId = 2;
    fixture.detectChanges();
  });

  describe('When the class initiate', () => {
    it('Should get items from HackerNewsService', () => {
      console.log(hackerNewsServiceStub.getItem.calls.count());
      expect(hackerNewsServiceStub.getItem).toHaveBeenCalledWith(component.itemId);
    });

    it('Should assign getItem return at this.item', () => {
      expect(component.item.value).toEqual(itemMock);
    });
  });

  describe('When user request to see details in item dialog', () => {
    let userId;
    
    beforeEach(() => {
      userId = 1;
      component.openUserDetailDialog(userId);
    });

    it('Should open the dialog', () => {
      expect(dialogStub.open).toHaveBeenCalledWith(UserDetailComponent, {data: {userId}});
    });
  });
  
});
